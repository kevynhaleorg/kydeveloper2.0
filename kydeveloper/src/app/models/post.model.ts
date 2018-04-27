import { Tag } from "./tag.model";
import { PostType } from "./post-type.enum";

export class Post {
    id: string;
    authorId: string;
    title: string;
    type?: PostType;
    icon?: string;
    tags?: Tag[];
    date: Date;
    featuredimage: string; // URL
    summary?: string;
    content?: string; // TODO: is this set as null to start with?
    likes: number;
    views: number;
    comments: number;
    shares: number;
}