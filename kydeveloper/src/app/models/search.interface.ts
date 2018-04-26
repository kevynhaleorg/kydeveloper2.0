import { FilterDirection } from "./filter-direction.enum";
import { Tag } from "./tag.model";

export interface Search {
    input: string;
    filterBy: any;
    filterDirection: FilterDirection;
    tags: Tag[];
}