import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarSocialmediaComponent } from './components/sidebar-socialmedia/sidebar-socialmedia.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { KyDeveloperRoutingModule } from './app-routing.module';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { MatIconModule, MatCardModule } from '@angular/material'
import { PostIconsComponent } from './components/post-icons/post-icons.component';
import { InputComponent } from './components/input/input.component';
import { InputVerificationService, AboutService, BlogService } from './services';
import { ContactService } from './services';
import { NavbarDropdownComponent } from './components/navbar/navbar-dropdown/navbar-dropdown.component';
import { KySelectDropdownComponent } from './components/ky-select-dropdown/ky-select-dropdown.component';
import { SubscribeService } from './services';
import { SideModalComponent } from './components/side-modal/side-modal.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  imports: [
    CommonModule,
    KyDeveloperRoutingModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  exports: [
    SidebarSocialmediaComponent,
    SocialMediaComponent,
    KyDeveloperRoutingModule,
    SearchBoxComponent,
    MatIconModule,
    PostIconsComponent,
    InputComponent,
    NavbarDropdownComponent,
    KySelectDropdownComponent,
    SideModalComponent,
    OverlayComponent
  ],
  declarations: [
    SidebarSocialmediaComponent,
    SocialMediaComponent,
    SearchBoxComponent,
    PostIconsComponent,
    InputComponent,
    NavbarDropdownComponent,
    KySelectDropdownComponent,
    SideModalComponent,
    OverlayComponent
  ],
  providers: [
    InputVerificationService,
    ContactService,
    SubscribeService,
    AboutService,
    BlogService
  ]
})
export class SharedModule { }
