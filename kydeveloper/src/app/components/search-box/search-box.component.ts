import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  constructor(private el: ElementRef) {

  }

  ngOnInit() {
  }

  focus() {
    this.el.nativeElement.classList.add("focused")
  }

  focusout() {
    this.el.nativeElement.classList.remove("focused")
  }

}
