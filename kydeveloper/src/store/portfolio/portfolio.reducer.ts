import { Post } from "../../app/models/post.model";
import { ItemState } from "../../app/models/item-state.model";
import { Search } from "../../app/models/search.interface";
import { ProjectFilter } from "../../app/models/project-filer.enum";
import { FilterDirection } from "../../app/models/filter-direction.enum";
import { PortfolioActions } from "../../actions/portfolio/portfolio.actions";

  export interface IProjectsState {
    projects: Post[];
    filter: string
    category: string
    loading: boolean
    error: boolean
  }

  export interface IProjectSingleState {
    project: Post;
    filter: string
    category: string
    loading: boolean
    error: boolean
  }

export interface IPortfolioState {
    projects: IProjectsState
    single: IProjectSingleState
}

const INITIAL_STATE: IPortfolioState = {
    projects: {
        projects: [],
        filter: '',
        loading: false,
        error: false,
        category: 'all'
    },
    single: {
        project: null,
        filter: '',
        loading: false,
        error: false,
        category: 'all' 
    }
}

export function portfolioReducer(
    state: IPortfolioState = INITIAL_STATE,
    action: any): any {


    switch(action.type) {

        case PortfolioActions.PROJECTS_GET_START: {
            return {
              ...state,
              projects: {
                ...state.projects,
                projects: [],
                loading: true,
                error: false
              }      
            }
          }
      
        case PortfolioActions.PROJECTS_GET_RESPONSE: {
          return {
            ...state,
            projects: {
              ...state.projects,
              loading: false,
              projects: action.payload.response.projects
            }      
          }
        }
      
        case PortfolioActions.PROJECTS_GET_ERROR: {
          return {
            ...state,
            projects: {
              ...state.projects,
              loading: false,
              error: true
            }      
          }
        }

        case PortfolioActions.PROJECTS_SET_FILTER: {
            return {
              ...state,
              projects: {
                ...state.projects,
                filter: action.payload.filter
              }      
            }
        }

        case PortfolioActions.PROJECTS_SET_CATEGORY: {
            return {
              ...state,
              projects: {
                ...state.projects,
                category: action.payload.category
              }      
            }
        }

        // SINGLE 

        case PortfolioActions.PROJECTS_GET_SINGLE_START: {
            return {
              ...state,
              single: {
                ...state.single,
                project: null,
                loading: true,
                error: false
              }      
            }
          }
      
        case PortfolioActions.PROJECTS_GET_SINGLE_RESPONSE: {
          return {
            ...state,
            single: {
              ...state.single,
              loading: false,
              project: action.payload.response.project
            }      
          }
        }
      
        case PortfolioActions.PROJECTS_GET_SINGLE_ERROR: {
          return {
            ...state,
            single: {
              ...state.single,
              loading: false,
              error: true
            }      
          }
        }

        
        default:
            return state

    }

}