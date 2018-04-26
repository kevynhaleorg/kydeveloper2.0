import { PostType } from "./post-type.enum";

export class CommentRequest {
    parentId: string;
    parentType: PostType;
    authorId: string;
    content: string;
    date: Date;
}