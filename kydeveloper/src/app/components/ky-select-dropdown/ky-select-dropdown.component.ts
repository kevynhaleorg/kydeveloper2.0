import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ky-select-dropdown',
  templateUrl: './ky-select-dropdown.component.html',
  styleUrls: ['./ky-select-dropdown.component.scss']
})
export class KySelectDropdownComponent implements OnInit {

  title:string = "Filter By"
  closed:boolean = true

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

}

export interface KyDropdownItems {

  item:string;
  selected:boolean;

}
