import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from '../../models/post.model';
import { select, dispatch } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { PortfolioActions } from '../../../actions/portfolio/portfolio.actions';
import { KySelectDropdownComponent } from '../../components/ky-select-dropdown/ky-select-dropdown.component';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  @select(['portfolio', 'projects', 'projects']) readonly projects$: Observable<Post[]>

  @select(['portfolio', 'projects', 'filter']) readonly filter$: Observable<string>

  @select(['portfolio', 'projects', 'loading']) readonly loading$: Observable<boolean>

  @select(['portfolio', 'projects', 'category']) readonly category$: Observable<string>

  dropDownItems: string[] = [ "all", "web apps", "design", "devops" ]

  @ViewChild(KySelectDropdownComponent) dropdown: KySelectDropdownComponent;

  dropdownSub: Subscription

  constructor(private _portfolioActions: PortfolioActions) { }

  ngOnInit() {
    this._portfolioActions.getProjects()
  }

  ngAfterViewInit() {
    this.dropdownSub = this.dropdown._selected.skip(1).subscribe(
      (value) => this.filter( value )
    )
  }

  ngOnDestroy() {
    if (this.dropdownSub !== undefined) this.dropdownSub.unsubscribe()
  }

  filter(key: string) {
    this._portfolioActions.setProjectsCategory(key)
  }

  searchBoxInput(value: string) {
    this._portfolioActions.setProjectsFilter(value)
  }

}
