import { Component, OnInit } from '@angular/core';
import { AboutActions } from '../../../../actions';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { IReadingItem } from '../../../services/about/about.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss', './../shared-about.component.scss']
})
export class ReadingListComponent implements OnInit {

  // READING LIST
  @select(['about', 'readingList', 'loading']) readonly loading$: Observable<boolean>
  @select(['about', 'readingList', 'error']) readonly error$: Observable<boolean>
  @select(['about', 'readingList', 'readingList']) readonly readingList$: Observable<Array<IReadingItem>>
  @select(['about', 'readingList', 'category']) readonly category$: Observable<boolean>
  @select(['about', 'readingList', 'hasMore']) readonly hasMore$: Observable<boolean>

  // SINGLE ITEM
  @select(['about', 'readingItem', 'loading']) readonly loadingSingle$: Observable<boolean>
  @select(['about', 'readingItem', 'error']) readonly errorSingle$: Observable<boolean>
  @select(['about', 'readingItem', 'item']) readonly singleItem$: Observable<IReadingItem>

  _categorySubscription: Subscription
  _hasMoreSubscription: Subscription
  _loadingSingleSub: Subscription

  hasMore: boolean = true
  single: boolean = false

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
    this._loadingSingleSub = this.loadingSingle$.subscribe(
      (loading) => { if (loading) this.single = true }
    )
  }

  ngOnDestroy() {
    this._aboutActions.getReadingListReset()
    
    //unsubscribe
    this._categorySubscription.unsubscribe()
    this._hasMoreSubscription.unsubscribe()
    this._loadingSingleSub.unsubscribe()
  }

  array(num: number): number[] {
    return Array(num).fill(0);
  }

  paginate() {
    if (this.hasMore) {
      this._aboutActions.getReadingList()
    }
  }

  setCategory(category: string) {
    this._aboutActions.setReadingListCategory(category)
  }

  showSingle(id: string) {
    this._aboutActions.getReadingItem(id)
  }

  hideSingle() {
    this.single = false
  }

}
