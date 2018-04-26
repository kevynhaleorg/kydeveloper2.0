import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BiographyComponent } from './pages/about/biography/biography.component';
import { ReadingListComponent } from './pages/about/reading-list/reading-list.component';
import { ResumeComponent } from './pages/about/resume/resume.component';
import { AboutContactComponent } from './pages/about/contact/contact.component';

const routes: Routes = [

    {
        path: "",
        component: AppComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: "home", component: HomeComponent },
            { path: "about", component: AboutComponent, children: [
                { path: "", redirectTo: 'biography', pathMatch: 'full'},
                { path: "biography", component: BiographyComponent},
                { path: "readinglist", component: ReadingListComponent},
                { path: "resume", component: ResumeComponent},
                { path: "contact", component: AboutContactComponent}
            ] },
            { path: "portfolio", component: PortfolioComponent },
            { path: "blog", component: BlogComponent },
            { path: "contact", component: ContactComponent },
        ]
    }
]

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: []
  })
  export class KyDeveloperRoutingModule { }