import * as userService from "./user.service.js";
/**
 * Register a new user
 * POST /api/users
 */
export const register = async (req, res) => {
    try {
        const { user } = req.body;
        const result = await userService.createUser(user);
        res.status(201).json({ user: result });
    }
    catch (error) {
        res.status(422).json({
            errors: {
                body: [
                    error.message
                ]
            }
        });
    }
};
/**
 * Login user
 * POST /api/users/login
 */
export const login = async (req, res) => {
    try {
        const { user } = req.body;
        const result = await userService.loginUser(user);
        res.json({ user: result });
    }
    catch (error) {
        res.status(401).json({
            errors: {
                body: [
                    error.message
                ]
            }
        });
    }
};
/**
 * Get current user
 * GET /api/user
 */
export const getCurrentUser = async (req, res) => {
    try {
        const result = await userService.getUser(req.userId, req.token);
        res.json({ user: result });
    }
    catch (error) {
        res.status(404).json({
            errors: {
                body: [
                    error.message
                ]
            }
        });
    }
};
/**
 * Update current user
 * PUT /api/user
 */
export const updateCurrentUser = async (req, res) => {
    try {
        const { user } = req.body;
        const result = await userService.updateUser(req.userId, user, req.token);
        res.json({ user: result });
    }
    catch (error) {
        res.status(422).json({
            errors: {
                body: [
                    error.message
                ]
            }
        });
    }
};
//# sourceMappingURL=user.controller.js.map