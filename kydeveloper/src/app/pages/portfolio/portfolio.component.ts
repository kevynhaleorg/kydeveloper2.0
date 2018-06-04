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

  @select(['portfolio', 'projects']) readonly projects$: Observable<Post[]>

  @select(['portfolio', 'itemState', 'search', 'filterBy']) readonly filterBy$: Observable<string>

  dropDownItems: string[] = [ "all", "web apps", "design", "devops" ]
  @ViewChild(KySelectDropdownComponent) dropdown: KySelectDropdownComponent;

  constructor(private _portfolioActions: PortfolioActions) { }

  ngOnInit() {
    this.projects$.subscribe(projects => console.log(projects))
  }

  ngAfterViewInit() {
    this.dropdown._selected.skip(1).subscribe(
      (selected) => {
        this._portfolioActions.filter(selected)
      })
  }

  filter(key: string) {
    this.dropdown._selected.next(key)
    this._portfolioActions.filter(key)
  }

  searchBoxInput(value: string) {
    console.log(value)
  }

}
