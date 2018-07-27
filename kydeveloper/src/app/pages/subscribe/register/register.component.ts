import { Component, OnInit, ViewChildren } from '@angular/core';
import { InputType, InputComponent } from '../../../components/input/input.component';
import { InputVerificationService } from '../../../services/input/input-verification.service';
import { select } from '../../../../../node_modules/@angular-redux/store';
import { Observable } from '../../../../../node_modules/rxjs/Observable';
import { Router } from '../../../../../node_modules/@angular/router';
import { Subscription } from '../../../../../node_modules/rxjs/Subscription';
import { SubscribeActions } from '../../../../actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  @ViewChildren(InputComponent) fields: Array<InputComponent>;
  inputType = InputType
  email: string

  @select(['subscribe', 'register', 'loading']) readonly loading$: Observable<boolean>
  @select(['subscribe', 'register', 'sent']) readonly sent$: Observable<boolean>

  sentSubscription: Subscription

  constructor(
    private vs: InputVerificationService,
    private router: Router,
    private _subscribeActions: SubscribeActions
  ) { }

  ngOnInit() {
    this.sentSubscription = this.sent$.subscribe(
      (sent) => {
        if (sent) {
          this.router.navigate(["/subscribe/pending"])
        }
      })
  }

  ngOnDestroy() {
    this.sentSubscription.unsubscribe()
  }

  submit() {
    this.vs.runAllTestsAndVerify(this.fields)
      .then( result => {
        if (!result.includes(false)) {
          this._subscribeActions.submit(this.email)
        }
      }); 
  }

}
