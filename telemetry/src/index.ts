import dotenv from "dotenv";
dotenv.config();
import express, { type Request, type Response,type NextFunction } from "express";
import jwt, { type VerifyErrors } from "jsonwebtoken";
import Database from "better-sqlite3";

const TELEMETRY_SECRET = process.env.TELEMETRY_SECRET;
const db = new Database(process.env.DATABASE_URL);
const app = express();
const PORT = 3001;

const BATCH_SIZE = 10; // Number of records before a batch write
const FLUSH_INTERVAL = 5000; // Flush every 5 seconds (in milliseconds)
type TelemetryRecord = [string, string, number]; // Tuple type for records

let telemetryQueue: TelemetryRecord[] = []; // Explicit type declaration

app.use(express.json()); // Enable JSON body parsing

const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "Unauthorized" });
    return next();
  }

  const token = authHeader?.split(" ")[1];
  if (!token) {
     res.status(401).json({ message: "Unauthorized: No token provided" });
     return next(); 
  }

  jwt.verify(
    token as string,
    TELEMETRY_SECRET,
    (err: VerifyErrors | null, decoded?: object | string) => {
      if (err) {
        if (err.name === "JsonWebTokenError") {
          res
            .status(403)
            .json({ message: "Forbidden: Invalid access token", err });
            return next();
        } else if (err.name === "TokenExpiredError") {
           res
            .status(401)
            .json({ message: "Unauthorized: Access token expired", err });
            return next();
        } else {
          // Handle other potential errors (e.g., signature verification failed)
          console.error("Error verifying token:", err);
          res
            .status(500)
            .json({ message: "Internal Server Error", err });
            return next();
        }
      }

      return next();
    }
  );
};

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

app.use(authenticateToken)

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
