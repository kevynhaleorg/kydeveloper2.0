import { Component, OnInit } from '@angular/core';
import { TNavPage } from '../../models/nav-page';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  closed:boolean = true;

  pages: TNavPage[] = [
    { url: '/about', title: 'About'},
    { url: '/portfolio', title: 'Portfolio'},
    { url: '/blog', title: 'Blog'}
  ]

  pagesDropdown: TNavPage[];

  title: string = "KyDeveloper"

  constructor() {
    this.pagesDropdown = this.pages.slice()
    this.pagesDropdown.push({ url: '/contact', title: 'Contact'})
  }

  ngOnInit() {
  }

  toggle() {
    this.closed = !this.closed
  }

}
