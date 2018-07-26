import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeComponent } from '../pages/subscribe/subscribe.component';
import { RegisterComponent } from '../pages/subscribe/register/register.component';
import { RegisterWaitingComponent } from '../pages/subscribe/register-waiting/register-waiting.component';
import { RegisterSuccessComponent } from '../pages/subscribe/register-success/register-success.component';
import { UnsubscribeComponent } from '../pages/subscribe/unsubscribe/unsubscribe.component';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    SubscribeComponent,
    RegisterComponent,
    RegisterWaitingComponent,
    RegisterSuccessComponent,
    UnsubscribeComponent]
})
export class SubscribeModule { }
