import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  post: Post = {
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

  posts: Post[] = [
    this.post,
    this.post,
    this.post,
    this.post,
    this.post,
    this.post,
    this.post,
    this.post
  ]

  constructor() { }

  ngOnInit() {
  }

}
