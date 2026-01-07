import type { Request, Response, NextFunction } from 'express';
declare global {
    namespace Express {
        interface Request {
            userId?: number;
            token?: string;
        }
    }
}
export declare const authRequired: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
/**
 * Auth Optional - Attaches userId if token present, but doesn't block
 */
export declare const authOptional: (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=auth.d.ts.map