import { Component, OnInit, ViewChildren } from '@angular/core';
import { InputVerificationService } from '../../../../services';
import { Router } from '@angular/router';
import { AboutActions } from '../../../../../actions';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { InputType, InputComponent } from '../../../../components/input/input.component';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.scss']
})
export class RecommendComponent implements OnInit {

  inputType = InputType
  @ViewChildren(InputComponent) fields: Array<InputComponent>;

  @select(['about', 'recommendBook', 'loading'])
  readonly loading$: Observable<boolean>
  @select(['about', 'recommendBook', 'recommended'])
  readonly submitted$: Observable<boolean>

  name: string
  book: string
  email: string
  message: string

  constructor(
    private vs: InputVerificationService,
    private router: Router,
    private _aboutActions: AboutActions
  ) { }

  ngOnInit() {
  }

  submit() {
    this.vs.runAllTestsAndVerify(this.fields)
    .then( result => {
      if (!result.includes(false)) {
        this._aboutActions.recommendBook(
          {
            name: this.name,
            email: this.email,
            book: this.book,
            message: this.message
          }
        )
      }
    }); 
  }

}
