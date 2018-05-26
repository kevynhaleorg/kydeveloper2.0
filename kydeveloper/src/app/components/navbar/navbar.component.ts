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
    { url: '/blog', title: 'Blog'},
  ]

  title: string = "KyDeveloper"

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.closed = !this.closed
  }

}
