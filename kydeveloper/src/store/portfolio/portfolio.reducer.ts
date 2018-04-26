import { Post } from "../../app/models/post.model";
import { ItemState } from "../../app/models/item-state.model";
import { Search } from "../../app/models/search.interface";
import { ProjectFilter } from "../../app/models/project-filer.enum";
import { FilterDirection } from "../../app/models/filter-direction.enum";
import { PortfolioActions } from "../../actions/portfolio/portfolio.actions";


const projects: Post[] = []

const searchState: Search = {
    input: null,
    filterBy: ProjectFilter.All,
    filterDirection: FilterDirection.DESC,
    tags: []
}

const itemState: ItemState = {
    loading: false,
    loadingMore: false,
    search: searchState,
    hasMore: false,
    hasError: false,
    page: 0,
    pageSize: 25,
    error: null
}

export interface IPortfolioState {
    projects: Post[];
    itemState: ItemState;
}

const INITIAL_STATE: IPortfolioState = {
    projects,
    itemState
}

export function portfolioReducer(
    state: IPortfolioState = INITIAL_STATE,
    action: any): any {


    switch(action.type) {

        case PortfolioActions.FETCH_REQUEST: {
            return {
                ...state,
                loading: true,
                projects: []       
            }
        }
        case PortfolioActions.FETCH_RESPONSE: {
            return {
                ...state,
                loading: false,
                projects: action.payload.items       
            }
        }
        default:
            return state

    }

}