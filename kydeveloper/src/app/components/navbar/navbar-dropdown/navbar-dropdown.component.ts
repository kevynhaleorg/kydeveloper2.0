import { Component, OnInit, Input, EventEmitter, Output, HostListener, ElementRef } from '@angular/core';
import { TNavPage } from '../../../models/nav-page';

@Component({
  selector: 'app-navbar-dropdown',
  templateUrl: './navbar-dropdown.component.html',
  styleUrls: ['./navbar-dropdown.component.scss']
})
export class NavbarDropdownComponent implements OnInit {

  @Input() pages: TNavPage[];
  @Input() closed: boolean;
  @Output() closedChanged:EventEmitter<void> = new EventEmitter<void>();

  wasInside: boolean;

  constructor(private _elementRef: ElementRef) { }

  ngOnInit() {
  }

  toggle() {
    this.closedChanged.emit()
  }

  @HostListener('click')
  onClickInside(){
    this.wasInside = true;
  }

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement) {
    if (!targetElement.classList.contains("menu") && !this.wasInside && !this.closed) {
      this.closedChanged.emit();
    }
    this.wasInside = false;
  }

}
