import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../pages/about/about.component';
import { ReadingListComponent } from '../pages/about/reading-list/reading-list.component';
import { ResumeComponent } from '../pages/about/resume/resume.component';
import { AboutPresentationsComponent } from '../pages/about/presentations/presentations.component';
import { BiographyComponent } from '../pages/about/biography/biography.component';
import { KyDeveloperRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared.module';
import { ReadingItemComponent } from '../pages/about/reading-list/reading-item/reading-item.component';
import { RecommendComponent } from '../pages/about/reading-list/recommend/recommend.component';

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
    AboutPresentationsComponent,
    ReadingItemComponent,
    RecommendComponent
  ],
  exports: [ReadingItemComponent, RecommendComponent]
})
export class AboutModule { }
