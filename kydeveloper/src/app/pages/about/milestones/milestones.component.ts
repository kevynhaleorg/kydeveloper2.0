import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { IMilestone } from '../../../services/about/about.service';
import { AboutActions } from '../../../../actions';

@Component({
  selector: 'app-milestones',
  templateUrl: './milestones.component.html',
  styleUrls: ['./milestones.component.scss', './../shared-about.component.scss']
})
export class AboutMilestonesComponent implements OnInit {

  @select(['about', 'milestones', 'milestones']) readonly milestones$: Observable<IMilestone[]>
  @select(['about', 'milestones', 'loading']) readonly loading$: Observable<boolean>

  constructor(private _actions: AboutActions) { }

  ngOnInit() {
    this._actions.requestMilestones()
  }

}
