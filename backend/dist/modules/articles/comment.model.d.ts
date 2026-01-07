import type { Profile } from "../profiles/profile.model.js";
export interface Comment {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    body: string;
    authorId: number;
}
export interface CommentResponse {
    id: number;
    createdAt: string;
    updatedAt: string;
    body: string;
    author: Profile;
}
//# sourceMappingURL=comment.model.d.ts.map