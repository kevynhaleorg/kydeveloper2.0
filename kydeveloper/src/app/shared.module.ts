import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarSocialmediaComponent } from './components/sidebar-socialmedia/sidebar-socialmedia.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { KyDeveloperRoutingModule } from './app-routing.module';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  imports: [
    CommonModule,
    KyDeveloperRoutingModule
  ],
  exports: [
    SidebarSocialmediaComponent,
    SocialMediaComponent,
    KyDeveloperRoutingModule,
    SearchBoxComponent
  ],
  declarations: [
    SidebarSocialmediaComponent,
    SocialMediaComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
