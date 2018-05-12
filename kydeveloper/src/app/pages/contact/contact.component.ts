import { Component, OnInit } from '@angular/core';
import { InputType } from '../../components/input/input.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  inputType = InputType
  constructor() { }

  ngOnInit() {
  }

}
