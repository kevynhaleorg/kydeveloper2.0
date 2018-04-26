import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [

    {
        path: "",
        component: AppComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: "home", component: HomeComponent },
            { path: "about", component: AboutComponent },
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