import { Component, OnInit, ViewChildren } from '@angular/core';
import { InputType, InputComponent } from '../../../components/input/input.component';
import { InputVerificationService } from '../../../services/input/input-verification.service';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ContactActions } from '../../../../actions/contact/contact.actions';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  inputType = InputType
  @ViewChildren(InputComponent) fields: Array<InputComponent>;

  @select(['contact', 'loading']) readonly loading$: Observable<boolean>
  @select(['contact', 'sent']) readonly sent$: Observable<boolean>

  sentSubscription: Subscription

  firstName:string;
  lastName:string;
  email:string;
  message:string;
  phoneNumber:string;

  constructor(
    private vs: InputVerificationService,
    private router: Router,
    private _contactActions: ContactActions) { }

  ngOnInit() {
    this.sentSubscription = this.sent$.subscribe(
      (sent) => {
        if (sent) {
          this.router.navigate(["/contact/sent"])
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
          this._contactActions.submit(
            {
              firstName: this.firstName,
              lastName: this.lastName,
              email: this.email,
              message: this.message,
              phoneNumber: this.phoneNumber
            }
          )
        }
      }); 
  }

}
