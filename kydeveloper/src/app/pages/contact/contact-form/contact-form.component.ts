import { Component, OnInit } from '@angular/core';
import { InputType } from '../../../components/input/input.component';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  inputType = InputType
  constructor() { }

  ngOnInit() {
  }

}
