import { Post } from "../../models/post.model";
import { Tag } from "../../models/tag.model";

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
  date: "Jan. 17, 2018",
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

export {
  posts
}