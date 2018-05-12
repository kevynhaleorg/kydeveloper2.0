import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../pages/home/home.component';
import { SharedModule } from '../shared.module';
import { LearnMoreComponent } from '../pages/home/learn-more/learn-more.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    LearnMoreComponent
  ]
})
export class HomeModule { }
