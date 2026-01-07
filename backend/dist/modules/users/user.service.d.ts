import type { UserAuth, CreateUserInput, LoginUserInput, UpdateUserInput } from "./user.model.js";
/**
 * Create user
 * @param input - CreateUserInput
 * @returns UserAuth - User authentication object
 * @throws Error - Invalid email or password
 * @throws Error - Internal server error
 */
export declare const createUser: (input: CreateUserInput) => Promise<UserAuth>;
/**
 * Login user
 * @param input - LoginUserInput
 * @returns UserAuth - User authentication object
 * @throws Error - Invalid email or password
 * @throws Error - Internal server error
 */
export declare const loginUser: (input: LoginUserInput) => Promise<UserAuth>;
/**
 * Get current user
 * @param userId - User ID
 * @param token - JWT token
 * @returns UserAuth - User authentication object
 * @throws Error - User not found
 * @throws Error - Internal server error
 */
/**
 * Get current user
 * @param userId - User ID (from JWT token)
 * @param token - Current JWT token (to return to client)
 * @returns UserAuth
 */
export declare const getUser: (userId: number, token: string) => Promise<UserAuth>;
/**
 * Update user
 * @param input - UpdateUserInput
 * @returns UserAuth - User authentication object
 * @throws Error - User not found
 * @throws Error - Internal server error
 */
export declare const updateUser: (userId: number, input: UpdateUserInput, token: string) => Promise<UserAuth>;
//# sourceMappingURL=user.service.d.ts.map