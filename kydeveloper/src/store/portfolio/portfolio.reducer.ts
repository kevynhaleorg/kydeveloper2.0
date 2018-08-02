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

function createPost(image: string, title: string): Post {
    return {
        id: "123",
        title: title,
        authorId: "1",
        date: null,
        featuredimage: image,
        likes: 5,
        views: 10,
        comments: 1,
        shares:0
      }
}

const projects: Post[] = [
    createPost("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAd_2Ni8zXw3sRShgICjwJtKrlWgc817s2Qpc6pHbeMoL40-AXFg", "Asterisk Deploy Automation"),
    createPost("https://i.pinimg.com/736x/6f/73/1f/6f731fada906faa1ab1199384db4ae0f--new-york-illustration-illustration-styles.jpg", "The Ultimae"),
    createPost("http://zaralikestodraw.com/wp-content/uploads/2018/01/zaragonzalezhoang_buildabuddy-688x1024.jpg", "The Big Cheese"),
    createPost("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwS9ANQYd8MJ4sZEZSGQxkeKGa4U2XeCL5p-hI_R3Kx8d8IC4n", "Construction Man"),
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