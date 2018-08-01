import { Component, OnInit, ElementRef, HostListener, EventEmitter, transition, style, animate, trigger, state, keyframes } from '@angular/core';
import { Subject } from '../../../../node_modules/rxjs/Subject';

@Component({
  selector: 'app-side-modal',
  templateUrl: './side-modal.component.html',
  styleUrls: ['./side-modal.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('void', style({right: '-1000px'})),
      state('in', style({right: '0px'})),
      state('out', style({right: '-1000px'})),
      transition('void => in', [
        animate('.5s ease')
      ]),
      transition('in => out', [
        animate('.5s ease')
      ]),
    ])
  ]
})
export class SideModalComponent implements OnInit {

  readonly _close: Subject<void> = new EventEmitter<void>()

  state: string = 'in'
  setup: boolean = true

  constructor(
    private el: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(!this.el.nativeElement.contains(event.target)) {
      if (this.setup) {
        this.setup = false
      } else {
        this.state = 'out'
      }
      setTimeout(() => this._close.next(), 500)
    }
  }

}
