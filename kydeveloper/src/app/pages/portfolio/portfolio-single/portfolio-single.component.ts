import { Component, OnInit } from '@angular/core';
import { Post } from '../../../models/post.model';
import { ActivatedRoute } from '@angular/router';
import { PortfolioActions } from '../../../../actions';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-portfolio-single',
  templateUrl: './portfolio-single.component.html',
  styleUrls: ['./portfolio-single.component.scss']
})
export class PortfolioSingleComponent implements OnInit {


  @select(['portfolio', 'single', 'project']) readonly project$: Observable<Post>

  @select(['portfolio', 'single', 'loading']) readonly loading$: Observable<boolean>

  constructor(
    private _route: ActivatedRoute,
    private _actions: PortfolioActions
    ) { }

  ngOnInit() {
    this._actions.getSingleProject(this._route.snapshot.params['projectid'])
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

}
