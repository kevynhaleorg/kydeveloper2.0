import { Injectable } from "../../../node_modules/@angular/core";
import { FluxStandardAction } from "flux-standard-action";
import { dispatch } from "@angular-redux/store";

@Injectable()
export class BlogActions {

  static BLOG_GET = 'BLOG_GET'
  static BLOG_GET_START = 'BLOG_GET_START'
  static BLOG_GET_RESPONSE = 'BLOG_GET_RESPONSE'
  static BLOG_GET_ERROR = 'BLOG_GET_ERROR'
  static BLOG_SET_FILTER = 'BLOG_SET_FILTER'
  static BLOG_SET_CATEGORY = 'BLOG_SET_CATEGORY'

  static BLOG_GET_SINGLE = 'BLOG_GET_SINGLE'
  static BLOG_GET_SINGLE_START = 'BLOG_GET_SINGLE_START'
  static BLOG_GET_SINGLE_RESPONSE = 'BLOG_GET_SINGLE_RESPONSE'
  static BLOG_GET_SINGLE_ERROR = 'BLOG_GET_SINGLE_ERROR'

  
  @dispatch()
  getPosts(): FluxStandardAction<{}, {}> {
      return {
          type: BlogActions.BLOG_GET,
          meta: {},
          payload: {}
      }
  }

  getPostsInternal(): FluxStandardAction<{}, {}> {
      return {
          type: BlogActions.BLOG_GET,
          meta: {},
          payload: {}
      }
  }
  
  getPostsStart(): FluxStandardAction<{}, {}> {
      return {
          type: BlogActions.BLOG_GET_START,
          meta: {},
          payload: {}
      }
  }
  
  getPostsResponse(response: any): FluxStandardAction<{}, {}> {
      return {
          type: BlogActions.BLOG_GET_RESPONSE,
          meta: {},
          payload: {response: response}
      }
  }
  
  getPostsError(error: Error): FluxStandardAction<{}, {}> {
      return {
          type: BlogActions.BLOG_GET_ERROR,
          meta: {},
          payload: error
      }
  }

  @dispatch()
  setPostsFilter(key: string): FluxStandardAction<{}, {}> {
      return {
          type: BlogActions.BLOG_SET_FILTER,
          meta: {},
          payload: {filter: key}
      }
  }

  @dispatch()
  setPostsCategory(key: string): FluxStandardAction<{}, {}> {
      return {
          type: BlogActions.BLOG_SET_CATEGORY,
          meta: {},
          payload: {category: key}
      }
  }

  @dispatch()
  getSinglePost(postId: string): FluxStandardAction<{}, {}> {
      return {
          type: BlogActions.BLOG_GET_SINGLE,
          meta: {},
          payload: { postId: postId}
      }
  }
  
  getSinglePostStart(): FluxStandardAction<{}, {}> {
      return {
          type: BlogActions.BLOG_GET_SINGLE_START,
          meta: {},
          payload: {}
      }
  }
  
  getSinglePostResponse(response: any): FluxStandardAction<{}, {}> {
      return {
          type: BlogActions.BLOG_GET_SINGLE_RESPONSE,
          meta: {},
          payload: {response: response}
      }
  }
  
  getSinglePostError(error: Error): FluxStandardAction<{}, {}> {
      return {
          type: BlogActions.BLOG_GET_SINGLE_ERROR,
          meta: {},
          payload: error
      }
  }
}