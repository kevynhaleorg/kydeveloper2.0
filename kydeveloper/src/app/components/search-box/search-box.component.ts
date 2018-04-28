import { Component, OnInit, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @ViewChild('search') input: ElementRef;

  constructor(private el: ElementRef) {

  }

  ngOnInit() {
  }

  @HostListener('click')
  click() {
    this.input.nativeElement.focus();
  }

  focus() {
    this.el.nativeElement.classList.add("focused")
  }

  focusout() {
    this.el.nativeElement.classList.remove("focused")
  }

}
