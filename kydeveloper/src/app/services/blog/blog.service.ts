import { Injectable } from "@angular/core";
import { Post } from "../../models/post.model";
import { Observable } from "rxjs/Observable";
import { IfObservable } from "rxjs/observable/IfObservable";
import { posts } from "./blog-mock";

@Injectable()
export class BlogService {

  constructor() { }

  getPosts(request: any): Observable<IBlogPostsResponse> {
    return IfObservable.of({posts: posts}).delay(1000)
  }

  getPost(postId: string): Observable<IBlogPostResponse> {
    return IfObservable.of(null).delay(1000)
  }

  likePost(postId: string): Observable<void> {
      return IfObservable.of(null).delay(1000)
  }

  viewPost(postId: string): Observable<void> {
      return IfObservable.of(null).delay(1000)
  }

}

export interface IBlogPostsResponse {
    posts: Post[]
}

export interface IBlogPostResponse {
    post: Post
}

export interface IBlogPostsRequest {
    category: string;
    filter: string;
    page: number;
    pageSize: number;
}