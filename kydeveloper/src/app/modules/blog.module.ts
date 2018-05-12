import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from '../pages/blog/blog.component';
import { SharedModule } from '../shared.module';
import { BlogSingleComponent } from '../pages/blog/blog-single/blog-single.component';
import { BlogRootComponent } from '../pages/blog/blog-root/blog-root.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    BlogComponent,
    BlogSingleComponent,
    BlogRootComponent
  ]
})
export class BlogModule { }
