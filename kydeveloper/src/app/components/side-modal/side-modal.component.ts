import { Component, OnInit, ElementRef, HostListener, EventEmitter, transition, style, animate, trigger, state } from '@angular/core';
import { Subject } from '../../../../node_modules/rxjs/Subject';

@Component({
  selector: 'app-side-modal',
  templateUrl: './side-modal.component.html',
  styleUrls: ['./side-modal.component.scss']
})
export class SideModalComponent implements OnInit {

  readonly _close: Subject<void> = new EventEmitter<void>()

  constructor(
    private el: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(!this.el.nativeElement.contains(event.target)) {
      this._close.next()
    }
  }

}
