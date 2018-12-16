import { Post } from "../../models/post.model";

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

var projects: Post[] = [
  createPost("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAd_2Ni8zXw3sRShgICjwJtKrlWgc817s2Qpc6pHbeMoL40-AXFg", "Asterisk Deploy Automation"),
  createPost("https://i.pinimg.com/736x/6f/73/1f/6f731fada906faa1ab1199384db4ae0f--new-york-illustration-illustration-styles.jpg", "The Ultimae"),
  createPost("http://zaralikestodraw.com/wp-content/uploads/2018/01/zaragonzalezhoang_buildabuddy-688x1024.jpg", "The Big Cheese"),
  createPost("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwS9ANQYd8MJ4sZEZSGQxkeKGa4U2XeCL5p-hI_R3Kx8d8IC4n", "Construction Man"),
  post,
  post,
  post
]

export {
  projects
}