import { Post } from "../../app/models/post.model";
import { ItemState } from "../../app/models/item-state.model";
import { Search } from "../../app/models/search.interface";
import { ProjectFilter } from "../../app/models/project-filer.enum";
import { FilterDirection } from "../../app/models/filter-direction.enum";
import { PortfolioActions } from "../../actions/portfolio/portfolio.actions";
import { Tag } from "../../app/models/tag.model";

const tag: Tag = {
    id: "1",
    name: "Asterisk"
}
const tag2: Tag = {
    id: "1",
    name: "Python"
}

const post: Post = {
    id: "123",
    title: "Asterisk Deploy Automation",
    authorId: "1",
    date: null,
    featuredimage: "assets/images/post1.png",
    likes: 5,
    views: 10,
    comments: 1,
    shares:0,
    tags: [tag, tag2],
    summary: "I am a fullstack web developer that specializes in automation and custom tooling within linux server environmnents. I can help save your business countless. I am a fullstack web developer that specializes in automation and custom tooling within linux server environmnents. I can help save your business countless…"
  }



const posts: Post[] = [
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

export interface IBlogState {
    posts: Post[];
    itemState: ItemState;
}

const INITIAL_STATE: IBlogState = {
    posts,
    itemState
}

export function blogReducer(
    state: IBlogState = INITIAL_STATE,
    action: any): any {


    switch(action.type) {

        default:
            return state

    }

}