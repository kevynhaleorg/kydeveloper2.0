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
import { PortfolioRootComponent } from './pages/portfolio/portfolio-root/portfolio-root.component';
import { PortfolioSingleComponent } from './pages/portfolio/portfolio-single/portfolio-single.component';
import { BlogSingleComponent } from './pages/blog/blog-single/blog-single.component';
import { BlogRootComponent } from './pages/blog/blog-root/blog-root.component';
import { LearnMoreComponent } from './pages/home/learn-more/learn-more.component';
import { ContactFormComponent } from './pages/contact/contact-form/contact-form.component';
import { ContactSentComponent } from './pages/contact/contact-sent/contact-sent.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';

const routes: Routes = [

    {
        path: "",
        component: AppComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: "home", component: HomeComponent },
            { path: "home/learnmore", component: LearnMoreComponent},
            { path: "about", component: AboutComponent, children: [
                { path: "", redirectTo: 'biography', pathMatch: 'full'},
                { path: "biography", component: BiographyComponent},
                { path: "readinglist", component: ReadingListComponent},
                { path: "resume", component: ResumeComponent},
                { path: "contact", component: AboutContactComponent}
            ] },
            { path: "portfolio", component: PortfolioRootComponent, children: [
                {path: "", component: PortfolioComponent},
                {path: ":projectid", component: PortfolioSingleComponent}
            ] },
            { path: "blog", component: BlogRootComponent, children: [
                {path: "", component: BlogComponent},
                {path: ":blogid", component: BlogSingleComponent}
            ] },
            { path: "contact", component: ContactComponent, children: [
                { path: "", component: ContactFormComponent},
                { path: "sent", component: ContactSentComponent}
            ]},
            { path: "subscribe", component: SubscribeComponent}
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