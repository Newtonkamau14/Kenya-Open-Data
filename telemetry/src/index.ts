import express, { type Request, type Response } from "express";
import Database from "better-sqlite3";

const db = new Database("telemetry.db");
const app = express();
const PORT = 3001;

const BATCH_SIZE = 10; // Number of records before a batch write
const FLUSH_INTERVAL = 5000; // Flush every 5 seconds (in milliseconds)
type TelemetryRecord = [string, string, number]; // Tuple type for records

let telemetryQueue: TelemetryRecord[] = []; // Explicit type declaration

app.use(express.json()); // Enable JSON body parsing

// Create table for telemetry
db.exec(`
  CREATE TABLE IF NOT EXISTS telemetry (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    endpoint TEXT NOT NULL,
    method TEXT NOT NULL,
    response_time INTEGER NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Function to flush the queue to the database
function flushTelemetryQueue(): void {
  if (telemetryQueue.length === 0) return;

  const insertStmt = db.prepare(
    "INSERT INTO telemetry (endpoint, method, response_time) VALUES (?, ?, ?)"
  ); 

  const insertMany = db.transaction((records: TelemetryRecord[]) => {
    for (const record of records) insertStmt.run(record);
  });

  insertMany(telemetryQueue);
  telemetryQueue = []; // Clear queue after writing
}

// Periodic flush (in case batch size is not reached)
setInterval(flushTelemetryQueue, FLUSH_INTERVAL);

app.post("/log", (req: Request, res: Response) => {
  const { endpoint, method, response_time } = req.body;

  if (!endpoint || !method || response_time == null) {
    res.status(400).json({ error: "Invalid data" });
  }

  telemetryQueue.push([endpoint, method, response_time]);

  if (telemetryQueue.length >= BATCH_SIZE) {
    flushTelemetryQueue();
  }
  res.json({ message: "Logged successfully" });
});

// **API to Retrieve Telemetry Data**
app.get("/telemetry", (req: Request, res: Response) => {
  const rows = db
    .prepare("SELECT * FROM telemetry ORDER BY timestamp DESC LIMIT 100")
    .all();
  res.json(rows);
});

// Start server
app.listen(PORT, () => {
  console.log(`Telemetry service running on http://localhost:${PORT}`);
});
