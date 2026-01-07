export interface User {
    id: number;
    username: string;
    email: string;
    passwordHash: string;
    bio?: string | null;
    image?: string | null;
    createdAt: Date;
    updatedAt: Date;
}
export interface UserAuth {
    id: number;
    email: string;
    username: string;
    token: string;
    bio?: string | null;
    image?: string | null;
}
export interface CreateUserInput {
    email: string;
    password: string;
    username: string;
}
export interface LoginUserInput {
    email: string;
    password: string;
}
export interface UpdateUserInput {
    email?: string;
    bio?: string | null;
    image?: string | null;
    password?: string;
    username?: string;
}
//# sourceMappingURL=user.model.d.ts.map