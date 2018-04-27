import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from '../pages/blog/blog.component';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    BlogComponent
  ]
})
export class BlogModule { }
