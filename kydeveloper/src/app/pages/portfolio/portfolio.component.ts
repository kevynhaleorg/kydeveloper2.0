import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { select, dispatch } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { PortfolioActions } from '../../../actions/portfolio/portfolio.actions';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  @select(['portfolio', 'projects']) readonly projects$: Observable<Post[]>

  @select(['portfolio', 'itemState', 'search', 'filterBy']) readonly filterBy$: Observable<string>

  constructor(private _portfolioActions: PortfolioActions) { }

  ngOnInit() {
    this.projects$.subscribe(projects => console.log(projects))
  }

  filter(key: string) {
    this._portfolioActions.filter(key)
  }

}
