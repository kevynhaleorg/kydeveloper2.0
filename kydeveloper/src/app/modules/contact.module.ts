import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../pages/contact/contact.component';
import { SharedModule } from '../shared.module';
import { ContactSentComponent } from '../pages/contact/contact-sent/contact-sent.component';
import { ContactFormComponent } from '../pages/contact/contact-form/contact-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ContactComponent,
    ContactSentComponent,
    ContactFormComponent
  ]
})
export class ContactModule { }
