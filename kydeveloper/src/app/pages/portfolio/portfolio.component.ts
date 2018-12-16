import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from '../../models/post.model';
import { select, dispatch } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { PortfolioActions } from '../../../actions/portfolio/portfolio.actions';
import { KySelectDropdownComponent } from '../../components/ky-select-dropdown/ky-select-dropdown.component';

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

  constructor(private _portfolioActions: PortfolioActions) { }

  ngOnInit() {
    this._portfolioActions.getProjects()
  }

  filter(key: string) {
    this.dropdown._selected.next(key)
    this._portfolioActions.setProjectsCategory(key)
  }

  searchBoxInput(value: string) {
    this._portfolioActions.setProjectsFilter(value)
  }

}
