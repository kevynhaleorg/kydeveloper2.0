import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from '../pages/portfolio/portfolio.component';
import { SharedModule } from '../shared.module';
import { ProjectItemComponent } from '../pages/portfolio/project-item/project-item.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    PortfolioComponent,
    ProjectItemComponent
  ]
})
export class PortfolioModule { }
