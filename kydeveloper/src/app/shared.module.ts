import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarSocialmediaComponent } from './components/sidebar-socialmedia/sidebar-socialmedia.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { KyDeveloperRoutingModule } from './app-routing.module';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { MatIconModule, MatCardModule } from '@angular/material'
import { PostIconsComponent } from './components/post-icons/post-icons.component';
import { InputComponent } from './components/input/input.component';
import { InputVerificationService } from './services/input/input-verification.service';
import { ContactService } from './services/contact/contact.service';
import { NavbarDropdownComponent } from './components/navbar/navbar-dropdown/navbar-dropdown.component';
import { KySelectDropdownComponent } from './components/ky-select-dropdown/ky-select-dropdown.component';

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
    PostIconsComponent,
    InputComponent,
    NavbarDropdownComponent,
    KySelectDropdownComponent
  ],
  declarations: [
    SidebarSocialmediaComponent,
    SocialMediaComponent,
    SearchBoxComponent,
    PostIconsComponent,
    InputComponent,
    NavbarDropdownComponent,
    KySelectDropdownComponent
  ],
  providers: [InputVerificationService, ContactService]
})
export class SharedModule { }
