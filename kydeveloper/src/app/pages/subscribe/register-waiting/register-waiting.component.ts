import { Component, OnInit } from '@angular/core';
import { select } from '../../../../../node_modules/@angular-redux/store';
import { Observable } from '../../../../../node_modules/rxjs/Observable';
import { Subscription } from '../../../../../node_modules/rxjs/Subscription';
import { Router } from '../../../../../node_modules/@angular/router';
import { SubscribeActions } from '../../../../actions';

@Component({
  selector: 'app-register-waiting',
  templateUrl: './register-waiting.component.html',
  styleUrls: ['./register-waiting.component.scss', './../shared-subscribe.component.scss']
})
export class RegisterWaitingComponent implements OnInit {

  @select(['subscribe', 'register', 'email']) readonly email$: Observable<string>
  @select(['subscribe', 'register', 'sent']) readonly registerSent$: Observable<boolean>
  @select(['subscribe', 'resend', 'sent']) readonly resendSent$: Observable<boolean>
  @select(['subscribe', 'resend', 'loading']) readonly loading$: Observable<boolean>

  sentSubscription: Subscription

  constructor(
    private router: Router,
    private _subscribeActions: SubscribeActions
  ) {
    
  }

  ngOnInit() {
    this.sentSubscription = this.registerSent$.subscribe(
      (sent) => {
        if (!sent) {
          this.router.navigate(["/subscribe"])
        }
      })
  }

  ngOnDestroy() {
    this.sentSubscription.unsubscribe()
  }

  resend() {
    this._subscribeActions.resend()
  }

}
