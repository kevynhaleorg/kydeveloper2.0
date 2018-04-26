import { PostType } from "./post-type.enum";

export class Comment {
    id: string;
    content: string;
    date: Date;
    authorId: string;
    replies: number;
    likes: number;
    parentId: string;
    parentType: PostType;
}