import jwt from 'jsonwebtoken';
const SECRET = process.env.JWT_SECRET || 'secret';
export const authRequired = (req, res, next) => {
    const authHeader = req.headers.authorization;
    // spec uses "Token xxx" format
    const token = authHeader?.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            errors: { body: ["Authorization token required"] }
        });
    }
    try {
        const decoded = jwt.verify(token, SECRET);
        req.userId = decoded.id;
        req.token = token;
        next();
    }
    catch (error) {
        return res.status(401).json({
            errors: { body: ["Invalid or expired token"] }
        });
    }
};
/**
 * Auth Optional - Attaches userId if token present, but doesn't block
 */
export const authOptional = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(" ")[1];
    if (token) {
        try {
            const decoded = jwt.verify(token, SECRET);
            req.userId = decoded.id;
            req.token = token;
        }
        catch (error) {
            // Invalid token, but we don't block - just continue without userId
        }
    }
    next();
};
//# sourceMappingURL=auth.js.map