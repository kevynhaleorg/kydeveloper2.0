import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-icons',
  templateUrl: './post-icons.component.html',
  styleUrls: ['./post-icons.component.scss']
})
export class PostIconsComponent implements OnInit {
  @Input() likes: number;
  @Input() shares: number;
  @Input() comments: number;

  constructor() { }

  ngOnInit() {
  }

}
