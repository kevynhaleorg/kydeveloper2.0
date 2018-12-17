import { Injectable } from "../../../node_modules/@angular/core";
import { BlogService } from "../../app/services";
import { EpicCreator } from "../../store/root.model";
import { createEpicMiddleware, ActionsObservable } from "../../../node_modules/redux-observable";
import { Observable } from "rxjs/Observable";
import { mergeMap } from "rxjs/operators/mergeMap";
import { map } from "rxjs/operators/map";
import { catchError } from "rxjs/operators/catchError";
import { startWith } from "rxjs/operators/startWith";
import { of } from "rxjs/observable/of";
import { BlogActions } from "./blog.actions";

@Injectable()
export class BlogEpics implements EpicCreator {

    constructor(
        private _actions: BlogActions,
        private _service: BlogService) {}
  
      createEpics() {
          return [
              createEpicMiddleware(this.getPosts.bind(this)),
              createEpicMiddleware(this.setPostsCategory.bind(this)),
              createEpicMiddleware(this.setPostsFilter.bind(this)),
              createEpicMiddleware(this.getSinglePost.bind(this)),
            ]
      }
  
      setPostsFilter(action$: ActionsObservable<any>, store: any): Observable<any> {
        return action$
          .ofType(BlogActions.BLOG_SET_FILTER)
          .debounceTime(500)
          .map(
            () => this._actions.getPostsInternal()
          )
      }
  
      setPostsCategory(action$: ActionsObservable<any>, store: any): Observable<any> {
        return action$
          .ofType(BlogActions.BLOG_SET_CATEGORY)
          .map(
            () => this._actions.getPostsInternal()
          )
      }
  
      getPosts(action$: ActionsObservable<any>, store: any): Observable<any> {
          return action$
            .ofType( BlogActions.BLOG_GET)
            .pipe(
              mergeMap(
                ({payload}) => {
                  return this._service.getPosts({})
                    .pipe(
                      map( value => this._actions.getPostsResponse(value)),
                        catchError(error => of(this._actions.getPostsError(error))),
                        startWith(this._actions.getPostsStart()))
                  })
              )
    }
  
    getSinglePost(action$: ActionsObservable<any>, store: any): Observable<any> {
      return action$
        .ofType( BlogActions.BLOG_GET_SINGLE)
        .pipe(
          mergeMap(
            ({payload}) => {
              return this._service.getPost(payload.postId)
                .pipe(
                  map( value => this._actions.getSinglePostResponse(value)),
                    catchError(error => of(this._actions.getSinglePostError(error))),
                    startWith(this._actions.getSinglePostStart()))
              })
          )
    }

}