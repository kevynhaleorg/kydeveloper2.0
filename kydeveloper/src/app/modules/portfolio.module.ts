import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from '../pages/portfolio/portfolio.component';
import { SharedModule } from '../shared.module';
import { ProjectItemComponent } from '../pages/portfolio/project-item/project-item.component';
import { PortfolioRootComponent } from '../pages/portfolio/portfolio-root/portfolio-root.component';
import { PortfolioSingleComponent } from '../pages/portfolio/portfolio-single/portfolio-single.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    PortfolioComponent,
    ProjectItemComponent,
    PortfolioRootComponent,
    PortfolioSingleComponent
  ]
})
export class PortfolioModule { }
