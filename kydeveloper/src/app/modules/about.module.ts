import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../pages/about/about.component';
import { ReadingListComponent } from '../pages/about/reading-list/reading-list.component';
import { ResumeComponent } from '../pages/about/resume/resume.component';
import { AboutPresentationsComponent } from '../pages/about/presentations/presentations.component';
import { BiographyComponent } from '../pages/about/biography/biography.component';
import { KyDeveloperRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    AboutComponent,
    BiographyComponent,
    ReadingListComponent,
    ResumeComponent,
    AboutPresentationsComponent
  ]
})
export class AboutModule { }
