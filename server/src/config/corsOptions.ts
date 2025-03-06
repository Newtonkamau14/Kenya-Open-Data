import { type CorsOptions } from 'cors';
import allowedOrigins from './allowedOrigins';

const corsOptions: CorsOptions = {
  origin: (
    origin: string | undefined,
    callback: (err: Error | null, allow?: boolean) => void
  ) => {
    if (origin && allowedOrigins.includes(origin)) {
      // Origin is allowed and present, grant access
      callback(null, true);
    } else if (!origin) {
      // No origin specified (e.g., for a preflight or server-to-server request)
      callback(null, true);
    } else {
      // Origin is not allowed, deny access
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
  credentials: true, // Allow credentials
  optionsSuccessStatus: 200, // For legacy browsers
};

export default corsOptions;
