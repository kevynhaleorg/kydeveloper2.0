import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';
import { SubscribeActions } from '../../../../actions';
import { select } from '../../../../../node_modules/@angular-redux/store';
import { Observable } from '../../../../../node_modules/rxjs/Observable';
import { Subscription } from '../../../../../node_modules/rxjs/Subscription';

@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.scss', './../shared-subscribe.component.scss']
})
export class RegisterSuccessComponent implements OnInit {

  @select(['subscribe', 'confirm', 'loading']) readonly loading$: Observable<boolean>
  @select(['subscribe', 'confirm', 'confirmed']) readonly confirmed$: Observable<boolean>
  @select(['subscribe', 'confirm', 'email']) readonly email$: Observable<string>

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
          this._subscribeActions.confirm(params['code'])
        } else {
          this.router.navigate(["/subscribe"])
        }
      })
  }

  ngOnDestroy() {
    this._codeParamSubscription.unsubscribe()
  }

  ngAfterViewInit() {}

}
