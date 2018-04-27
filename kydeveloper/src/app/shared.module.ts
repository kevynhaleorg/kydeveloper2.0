import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarSocialmediaComponent } from './components/sidebar-socialmedia/sidebar-socialmedia.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { KyDeveloperRoutingModule } from './app-routing.module';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { MatIconModule, MatCardModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    KyDeveloperRoutingModule,
    MatIconModule
  ],
  exports: [
    SidebarSocialmediaComponent,
    SocialMediaComponent,
    KyDeveloperRoutingModule,
    SearchBoxComponent,
    MatIconModule
  ],
  declarations: [
    SidebarSocialmediaComponent,
    SocialMediaComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
