import type { Request, Response } from "express";
/**
 * Register a new user
 * POST /api/users
 */
export declare const register: (req: Request, res: Response) => Promise<void>;
/**
 * Login user
 * POST /api/users/login
 */
export declare const login: (req: Request, res: Response) => Promise<void>;
/**
 * Get current user
 * GET /api/user
 */
export declare const getCurrentUser: (req: Request, res: Response) => Promise<void>;
/**
 * Update current user
 * PUT /api/user
 */
export declare const updateCurrentUser: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=user.controller.d.ts.map