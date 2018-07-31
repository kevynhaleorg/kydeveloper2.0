import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { AboutActions } from '../../../../actions';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss', './../shared-about.component.scss']
})
export class BiographyComponent implements OnInit {

  // READING LIST
  @select(['about', 'biography', 'loading']) readonly loading$: Observable<boolean>
  @select(['about', 'biography', 'error']) readonly error$: Observable<boolean>
  @select(['about', 'biography', 'biography']) readonly biography$: Observable<string>

  constructor(
    private _aboutActions: AboutActions
  ) { }

  ngOnInit() {
    this._aboutActions.getBiography()
  }

}
