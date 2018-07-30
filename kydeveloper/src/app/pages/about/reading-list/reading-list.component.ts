import { Component, OnInit } from '@angular/core';
import { AboutActions } from '../../../../actions';
import { select } from '../../../../../node_modules/@angular-redux/store';
import { Observable } from '../../../../../node_modules/rxjs/Observable';
import { IReadingItem } from '../../../services/about/about.service';
import { Subscription } from '../../../../../node_modules/rxjs/Subscription';

@Component({
  selector: 'app-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent implements OnInit {

  @select(['about', 'readingList', 'loading']) readonly loading$: Observable<boolean>
  @select(['about', 'readingList', 'error']) readonly error$: Observable<boolean>
  @select(['about', 'readingList', 'readingList']) readonly readingList$: Observable<Array<IReadingItem>>
  @select(['about', 'readingList', 'category']) readonly category$: Observable<boolean>
  @select(['about', 'readingList', 'hasMore']) readonly hasMore$: Observable<boolean>

  _categorySubscription: Subscription
  _hasMoreSubscription: Subscription

  hasMore: boolean = true

  constructor(
    private _aboutActions: AboutActions,
  ) { }

  ngOnInit() {
    this.paginate()
    this._categorySubscription = this.category$.skip(1).subscribe(
      (category) => this._aboutActions.getReadingList()
    )
    this._hasMoreSubscription = this.hasMore$.subscribe(
      (hasMore) => this.hasMore = hasMore
    )
  }

  ngOnDestroy() {
    this._aboutActions.getReadingListReset()
    
    //unsubscribe
    this._categorySubscription.unsubscribe()
  }

  paginate() {
    if (this.hasMore) {
      this._aboutActions.getReadingList()
    }
  }

}
