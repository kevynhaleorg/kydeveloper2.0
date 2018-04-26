import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoreModule } from '../store/store.module';
import { ACTION_PROVIDERS, EPIC_PROVIDERS } from '../actions';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarSocialmediaComponent } from './components/sidebar-socialmedia/sidebar-socialmedia.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { KyDeveloperRoutingModule } from './app-routing.module';
import { AboutModule } from './modules/about.module';
import { BlogModule } from './modules/blog.module';
import { ContactModule } from './modules/contact.module';
import { HomeModule } from './modules/home.module';
import { PortfolioModule } from './modules/portfolio.module';
import { BiographyComponent } from './pages/about/biography/biography.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarSocialmediaComponent
  ],
  imports: [
    BrowserModule,
    StoreModule,
    KyDeveloperRoutingModule,
    AboutModule,
    BlogModule,
    ContactModule,
    HomeModule,
    PortfolioModule
  ],
  providers: [
    ACTION_PROVIDERS,
    EPIC_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
