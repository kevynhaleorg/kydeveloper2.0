import { Component, OnInit } from '@angular/core';
import { select } from '../../../../../node_modules/@angular-redux/store';
import { Observable } from '../../../../../node_modules/rxjs/Observable';
import { Subscription } from '../../../../../node_modules/rxjs/Subscription';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';
import { SubscribeActions } from '../../../../actions';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.scss', './../shared-subscribe.component.scss']
})
export class UnsubscribeComponent implements OnInit {

  @select(['subscribe', 'unsubscribe', 'loading']) readonly loading$: Observable<boolean>
  @select(['subscribe', 'unsubscribe', 'unsubscribed']) readonly unsubscribed$: Observable<boolean>
  @select(['subscribe', 'unsubscribe', 'email']) readonly email$: Observable<string>

  _codeParamSubscription: Subscription

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _subscribeActions: SubscribeActions
  ) { }

  ngOnInit() {
    this._codeParamSubscription = this.route.queryParams.subscribe(
      params => {
        console.log(params)
        if (params['code'] != null) {
          this._subscribeActions.unsubscribe(params['code'])
        } else {
          this.router.navigate(["/subscribe"])
        }
      })
  }

  ngOnDestroy() {
    this._codeParamSubscription.unsubscribe()
  }

}
