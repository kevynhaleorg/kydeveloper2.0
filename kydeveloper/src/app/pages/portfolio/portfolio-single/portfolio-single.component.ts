import { Component, OnInit } from '@angular/core';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-portfolio-single',
  templateUrl: './portfolio-single.component.html',
  styleUrls: ['./portfolio-single.component.scss']
})
export class PortfolioSingleComponent implements OnInit {

  post: Post = {
    id: "123",
    title: "Asterisk Deploy Automation",
    authorId: "1",
    date: "Aug. 27, 2017",
    featuredimage: "assets/images/buildings.png",
    likes: 5,
    views: 10,
    comments: 1,
    shares:0,
    summary: "This is a short introduction  about Asterisk Desploy Automation and how it works.",
  }

  constructor() { }

  ngOnInit() {
  }

}
