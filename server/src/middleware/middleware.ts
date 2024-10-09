import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { MemoryStore, rateLimit } from "express-rate-limit";
import { ApiKeyRepository } from "../repository/api-key.repository";
import { AuthRepository } from "../repository/auth.repository";


const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.session || !req.session.userId) {
    // User is not logged in
    return res.status(401).json({ message: 'Unauthorized: Please log in to access this resource' });
  }
  next();
};

const authenticateKey = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const apiKeyRepository = new ApiKeyRepository();
  let API_KEY = req.headers["x-api-key"] as string | undefined;

  if (!API_KEY) {
    API_KEY = req.query.API_KEY as string;
  }

  if (!API_KEY) {
    return res.status(401).json({
      message: "Please log in to get the API KEY.",
    });
  }

  const user = await apiKeyRepository.getApiKeyAuth(API_KEY); // Assuming this returns IUser | undefined

  if (!user || user.apiKey !== API_KEY) {
    // Compare with the user's apiKey field
    return res.status(403).json({
      message: "This action is not allowed for your account.",
    });
  }

  next();
};

const errorHandler: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || "Something went wrong";

  return res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: process.env.NODE_ENV === "development" ? err.stack : {},
  });
};


const limiter = rateLimit({
  windowMs: 60000,
  store: new MemoryStore(),
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res, next, options) =>
    res.status(options.statusCode).send(options.message),
});

export { requireAuth, authenticateKey, errorHandler,limiter };
