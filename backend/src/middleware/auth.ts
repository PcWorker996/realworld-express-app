import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'; 

declare global {
  namespace Express {
    interface Request {
      userId?: number;
      token?: string;
    }
  }
}

const SECRET = process.env.JWT_SECRET || 'secret';

export const authRequired = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  // spec uses "Token xxx" format
  const token = authHeader?.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      errors: { body: ["Authorization token required"] }
    });
  }

  try {
    const decoded = jwt.verify(token, SECRET) as { id: number };
    req.userId = decoded.id;
    req.token = token;
    next();
  } catch (error) {
    return res.status(401).json({
      errors: { body: ["Invalid or expired token"] }
    });
  }
};

/**
 * Auth Optional - Attaches userId if token present, but doesn't block
 */
export const authOptional = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1];

  if (token) {
    try {
      const decoded = jwt.verify(token, SECRET) as { id: number };
      req.userId = decoded.id;
      req.token = token;
    } catch (error) {
      // Invalid token, but we don't block - just continue without userId
    }
  }

  next();
};

