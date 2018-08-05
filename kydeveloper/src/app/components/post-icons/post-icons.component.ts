import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-post-icons',
  templateUrl: './post-icons.component.html',
  styleUrls: ['./post-icons.component.scss']
})
export class PostIconsComponent implements OnInit {
  @Input() likes: number;
  @Input() shares: number;
  @Input() comments: number;

  @Input() showLikes: boolean = true;
  @Input() showShares: boolean = true;
  @Input() showComments: boolean = true;

  readonly _likesSub: Subject<void> = new EventEmitter<void>()
  readonly _sharesSub: Subject<void> = new EventEmitter<void>()
  readonly _commentsSub: Subject<void> = new EventEmitter<void>()

  constructor() { }

  ngOnInit() {
  }

  like() {
    this._likesSub.next()
  }

  share() {
    this._sharesSub.next()
  }

  comment() {
    this._commentsSub.next()
  }

}
