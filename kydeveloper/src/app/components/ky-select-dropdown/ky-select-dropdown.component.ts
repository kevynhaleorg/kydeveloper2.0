import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-ky-select-dropdown',
  templateUrl: './ky-select-dropdown.component.html',
  styleUrls: ['./ky-select-dropdown.component.scss']
})
export class KySelectDropdownComponent implements OnInit {

  closed:boolean = true
  wasInside: boolean
  _items: string[]
  _selected: BehaviorSubject<string>

  @Input() 
  set items(items: string[]) {
    this._items = items
    this._selected = new BehaviorSubject<string>(items[0]);
  }
  
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.closed = !this.closed;
  }

  select(selected:string) {
    this._selected.next(selected);

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
