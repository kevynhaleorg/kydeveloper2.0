import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  host: {
    '(mouseenter)': 'showCover(true)',
    '(mouseleave)': 'showCover(false)'
  }
})
export class ProjectItemComponent implements OnInit {

  @Input("post") post: Post;

  coverState: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseenter')
  showCover() {
    this.coverState = true;
  }

  @HostListener('mouseleave')
  hideCover() {
    this.coverState = false;
  }

}
