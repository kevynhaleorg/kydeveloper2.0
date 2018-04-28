import { Post } from "../../app/models/post.model";
import { ItemState } from "../../app/models/item-state.model";
import { Search } from "../../app/models/search.interface";
import { ProjectFilter } from "../../app/models/project-filer.enum";
import { FilterDirection } from "../../app/models/filter-direction.enum";
import { PortfolioActions } from "../../actions/portfolio/portfolio.actions";

const post: Post = {
    id: "123",
    title: "Asterisk Deploy Automation",
    authorId: "1",
    date: null,
    featuredimage: "assets/images/buildings.png",
    likes: 5,
    views: 10,
    comments: 1,
    shares:0
  }

const projects: Post[] = [
    post,
    post,
    post,
    post,
    post,
    post,
    post
  ]


const searchState: Search = {
    input: null,
    filterBy: ProjectFilter.ALL,
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

        case PortfolioActions.FILTER: {
            console.log(state)
            return {
              ...state,
              itemState: {
                  ...state.itemState,
                  search: {
                      ...state.itemState.search,
                      filterBy: action.payload.filterBy
                  }
              }
            }
          }
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