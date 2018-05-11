import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarSocialmediaComponent } from './components/sidebar-socialmedia/sidebar-socialmedia.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { KyDeveloperRoutingModule } from './app-routing.module';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { MatIconModule, MatCardModule } from '@angular/material'
import { PostIconsComponent } from './components/post-icons/post-icons.component';

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
    MatIconModule,
    PostIconsComponent
  ],
  declarations: [
    SidebarSocialmediaComponent,
    SocialMediaComponent,
    SearchBoxComponent,
    PostIconsComponent
  ]
})
export class SharedModule { }
