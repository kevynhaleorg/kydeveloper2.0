import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
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
  styleUrls: [
    './register.component.scss',
    './../shared-subscribe.component.scss']
})
export class RegisterComponent implements OnInit {
  
  @ViewChildren(InputComponent) fields: QueryList<InputComponent>;
  inputType = InputType
  email: string

  @select(['subscribe', 'register', 'loading']) readonly loading$: Observable<boolean>
  @select(['subscribe', 'register', 'sent']) readonly sent$: Observable<boolean>

  sentSubscription: Subscription
  enterSubscription: Subscription

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
    this.enterSubscription.unsubscribe()  
  }

  ngAfterViewInit() {
    setTimeout( () => { this.fields.first.focus() }, 500)
    this.enterSubscription = this.fields.first._enterChanged.subscribe(
      () => this.submit()
    )
  }

  submit() {
    this.vs.runAllTestsAndVerify(this.fields.toArray())
      .then( result => {
        if (!result.includes(false)) {
          this._subscribeActions.submit(this.email)
        }
      }); 
  }

}
