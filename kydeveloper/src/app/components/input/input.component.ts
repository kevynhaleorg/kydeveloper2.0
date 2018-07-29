import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { InputVerificationService } from './../../services/input/input-verification.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Subject } from '../../../../node_modules/rxjs/Subject';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() placeholder;
  @Input() type: InputType;
  @Input() required: boolean;
  @Input() match: InputComponent;

  // Added tests are tests that can be passed in.
  // Tests must return a Promise<boolean>. Any
  // error message handling must be done with in the test.
  @Input() addedTests: Array<Function>;

  @Output() value = new EventEmitter();
  @ViewChild('field') field;

  lit = InputType;

  fieldType: string;

  selected: boolean;
  error: boolean;
  successful: boolean = false;
  errors: Array<string> = [];
  newField: boolean = true;

  public fieldValue: string = "";

  valueSubject: BehaviorSubject<string> = new BehaviorSubject("");
  public readonly _enterChanged: Subject<void> = new Subject();

  constructor(
    private vs: InputVerificationService) {
    this.valueSubject
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(input => {
        if (!this.newField) {
          this.value.emit(input); 
          this.vs.runAllTestsAndVerify([this]).then();
        }
      });
  }

  ngOnInit() {
    if (
      [
        this.lit.TEXT,
        this.lit.EMAIL,
        this.lit.POSTAL_CODE].includes(this.type))
    {
      this.fieldType = 'text';
    }
    else if (
      [
        this.lit.PASSWORD,
        this.lit.PASSWORD_VERIFY].includes(this.type))
    {
      this.fieldType = 'password';
    }

    if (!this.required) {
      this.placeholder += " (Optional)";
    }
  }

  private inputFocus() {
  	this.selected = true;
  }

  private inputFocusOut() {
  	this.selected = false;
    this.vs.runAllTestsAndVerify([this]).then();
  }

  private update(input: any) {
    this.newField = false;
    this.fieldValue = input;
    this.valueSubject.next(input);   
  }

  public runTests() {
    if (this.required || this.fieldValue.length > 0) {
      switch(this.type) {   

        case this.lit.PASSWORD_VERIFY:
          this.vs.validatePassword(this);
          break;  

        case this.lit.EMAIL:
          this.vs.validateEmail(this);
          break;  

        case this.lit.POSTAL_CODE:
          this.vs.validatePostalCode(this);
          break;
        
        case this.lit.PHONE_NUMBER:
          this.vs.validatePhoneNumber(this);
          break;

        default:
          this.vs.noValidation(this);
          break;
      }  

      if (this.match) {
        this.vs.matchFields(this, this.match);
      }
    }

    if (this.required) {
      this.vs.required(this);
    }

  }

  public clear() {
    this.field.nativeElement.value = "";
    this.fieldValue = "";
    this.error = false;
    this.successful = false;
    this.errors = [];
  }

  public errorMessage(errors: Array<string>) {
    this.errors = errors;
    this.error = true;
    this.successful = false;
  }

  public success() {
    this.error = false;
    this.successful = true;
  }

  public focus() {
    this.field.nativeElement.focus()
  }

  enterKey() {
    this._enterChanged.next()
  }
}

export enum InputType {
  TEXT,
  PASSWORD,
  PASSWORD_VERIFY,
  PHONE_NUMBER,
  EMAIL,
  POSTAL_CODE,
  TEXT_AREA
}
