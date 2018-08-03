import { Component, OnInit, ViewChild } from '@angular/core';
import { AboutActions } from '../../../../actions';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { IReadingItem } from '../../../services/about/about.service';
import { Subscription } from 'rxjs/Subscription';
import { KySelectDropdownComponent } from '../../../components/ky-select-dropdown/ky-select-dropdown.component';
import { SideModalComponent } from '../../../components/side-modal/side-modal.component';
import { Router, NavigationEnd, ActivatedRoute } from '../../../../../node_modules/@angular/router';

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

  _categorySubscription: Subscription
  _hasMoreSubscription: Subscription

  hasMore: boolean = true
  _showSideModal: boolean = false

  dropDownItems: string[] = [ "all", "development", "design", "self-help" ]
  @ViewChild(KySelectDropdownComponent) dropdown: KySelectDropdownComponent;
  _dropDownSub: Subscription

  @ViewChild(SideModalComponent) set sm(sideModal: SideModalComponent) {
    if (sideModal !=  null) {
      this._sideModalCloseSub = sideModal._close.subscribe(
        () => this.hideSideModal()
      )
    }
  }
  _sideModalCloseSub: Subscription
  _routerSub: Subscription

  constructor(
    private _aboutActions: AboutActions,
    private _router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.paginate()
    this.matchSubRoute(this._router.routerState.snapshot.url)
    this._categorySubscription = this.category$.skip(1).subscribe(
      (category) => this._aboutActions.getReadingList()
    )
    this._hasMoreSubscription = this.hasMore$.subscribe(
      (hasMore) => this.hasMore = hasMore
    )
    this._routerSub = this._router.events.subscribe((_event) => {
        if(_event instanceof NavigationEnd) {
          this.matchSubRoute(_event.url)
        }
      })
  }

  ngAfterViewInit() {
    this._dropDownSub = this.dropdown._selected.skip(1).subscribe(
      (selected) => this._aboutActions.setReadingListCategory(selected)
    )
  }

  ngOnDestroy() {
    this._aboutActions.getReadingListReset()
    
    //unsubscribe
    this._categorySubscription.unsubscribe()
    this._hasMoreSubscription.unsubscribe()
    this._routerSub.unsubscribe()
    if (this._sideModalCloseSub != null) this._sideModalCloseSub.unsubscribe()
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

  getSingle(id: string) {
    this.routeTo(id)
  }

  hideSideModal() {
    this._sideModalCloseSub.unsubscribe()
    this._showSideModal = false
    this.routeTo("")
  }

  showSideModal() {
    this._showSideModal = true
  }

  showRecommend() {
    this.routeTo("recommend")
  }

  routeTo(route:string) {
    const cleanRoute: string = route.replace(/\s/g, "")
    this._router.navigate([`/about/readinglist/${cleanRoute}`])
  }

  matchSubRoute(url: string): void {
    this._showSideModal = url.match(/\/about\/readinglist\/([a-zA-Z0-9]+)$/i) != null
  }

}
