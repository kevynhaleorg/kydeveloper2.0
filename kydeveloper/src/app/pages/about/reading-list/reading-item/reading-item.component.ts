import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { IReadingItem } from '../../../../services/about/about.service';
import { AboutActions } from '../../../../../actions';
import { Router, ActivatedRoute } from '../../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-reading-item',
  templateUrl: './reading-item.component.html',
  styleUrls: ['./reading-item.component.scss']
})
export class ReadingItemComponent implements OnInit {

  // SINGLE ITEM
  @select(['about', 'readingItem', 'loading']) readonly loading$: Observable<boolean>
  @select(['about', 'readingItem', 'error']) readonly error$: Observable<boolean>
  @select(['about', 'readingItem', 'item']) readonly item$: Observable<IReadingItem>

  constructor(
    private _aboutActions: AboutActions,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._aboutActions.getReadingItem(this._route.snapshot.params['readingItemId'])
  }

  array(num: number): number[] {
    return Array(num).fill(0);
  }

}
