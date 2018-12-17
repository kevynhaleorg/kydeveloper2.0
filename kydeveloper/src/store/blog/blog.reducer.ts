import { Post } from "../../app/models/post.model";
import { BlogActions } from "../../actions/blog/blog.actions";


export interface IBlogPostsState {
    posts: Post[];
    filter: string
    category: string
    loading: boolean
    error: boolean
}

export interface IBlogSingleState {
    post: Post;
    filter: string
    category: string
    loading: boolean
    error: boolean
}

export interface IBlogState {
    blog: IBlogPostsState
    single: IBlogSingleState
}

const INITIAL_STATE: IBlogState = {
    blog: {
        posts: [],
        filter: '',
        loading: false,
        error: false,
        category: 'all'
    },
    single: {
        post: null,
        filter: '',
        loading: false,
        error: false,
        category: 'all' 
    }
}

export function blogReducer(
    state: IBlogState = INITIAL_STATE,
    action: any): any {


        switch(action.type) {

            case BlogActions.BLOG_GET_START: {
                return {
                  ...state,
                  blog: {
                    ...state.blog,
                    posts: [],
                    loading: true,
                    error: false
                  }      
                }
              }
          
            case BlogActions.BLOG_GET_RESPONSE: {
              return {
                ...state,
                blog: {
                  ...state.blog,
                  loading: false,
                  posts: action.payload.response.posts
                }      
              }
            }
          
            case BlogActions.BLOG_GET_ERROR: {
              return {
                ...state,
                blog: {
                  ...state.blog,
                  loading: false,
                  error: true
                }      
              }
            }
    
            case BlogActions.BLOG_SET_FILTER: {
                return {
                  ...state,
                  blog: {
                    ...state.blog,
                    filter: action.payload.filter
                  }      
                }
            }
    
            case BlogActions.BLOG_SET_CATEGORY: {
                return {
                  ...state,
                  blog: {
                    ...state.blog,
                    category: action.payload.category
                  }      
                }
            }
    
            // SINGLE 
    
            case BlogActions.BLOG_GET_SINGLE_START: {
                return {
                  ...state,
                  single: {
                    ...state.single,
                    post: null,
                    loading: true,
                    error: false
                  }      
                }
              }
          
            case BlogActions.BLOG_GET_SINGLE_RESPONSE: {
              return {
                ...state,
                single: {
                  ...state.single,
                  loading: false,
                  post: action.payload.response.post
                }      
              }
            }
          
            case BlogActions.BLOG_GET_SINGLE_ERROR: {
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