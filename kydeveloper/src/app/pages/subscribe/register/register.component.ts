import { Component, OnInit } from '@angular/core';
import { InputType } from '../../../components/input/input.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  inputType = InputType

  constructor() { }

  ngOnInit() {
  }

}
