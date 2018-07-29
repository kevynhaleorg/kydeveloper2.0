import { Injectable } from "../../../../node_modules/@angular/core";
import { Post } from "../../models/post.model";
import { Observable } from "../../../../node_modules/rxjs/Observable";
import { IfObservable } from "../../../../node_modules/rxjs/observable/IfObservable";

@Injectable()
export class BlogService {

  constructor() { }

  getPosts(request: IBlogPostsRequest): Observable<IBlogPostsResponse> {
    return IfObservable.of(null).delay(2000)
  }

  getPost(postId: string): Observable<Post> {
    return IfObservable.of(null).delay(2000)
  }

}

export interface IBlogPostsResponse {
    results: Array<Post>
    page: number;
    pageSize: number;
    category: string;
    filter: string;
}

export interface IBlogPostsRequest {
    category: string;
    filter: string;
    page: number;
    pageSize: number;
}