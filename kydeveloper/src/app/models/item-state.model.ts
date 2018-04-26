import { Search } from "./search.interface";

export interface ItemState {
    loading: boolean;
    loadingMore: boolean;
    search: Search;
    hasMore: boolean;
    hasError: boolean;
    page?: number;
    pageSize?: number;
    error?: string;
}