import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-ky-select-dropdown',
  templateUrl: './ky-select-dropdown.component.html',
  styleUrls: ['./ky-select-dropdown.component.scss']
})
export class KySelectDropdownComponent implements OnInit {

  title:string = "Filter By"
  closed:boolean = true
  wasInside: boolean;

  items: string[] = [
    "All", "Development", "Design", "Devops"
  ]
  selected: string = "All"

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.closed = !this.closed;
  }

  select(selected:string) {
    this.selected = selected;

    this.toggle()
  }

  @HostListener('click')
  onClickInside(){
    this.wasInside = true;
  }

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement) {
    if (!this.wasInside && !this.closed) {
      this.toggle()
    }
    this.wasInside = false;
  }

}

export interface KyDropdownItems {

  item:string;
  selected:boolean;

}
