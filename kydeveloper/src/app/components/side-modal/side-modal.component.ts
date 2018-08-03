import { Component, OnInit, ElementRef, HostListener, EventEmitter, transition, style, animate, trigger, state, keyframes, Input } from '@angular/core';
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

  // List of class names that when clicked on don't close the modal
  @Input() whiteList: Array<string>

  state: string = 'in'
  setup: boolean = true

  constructor(
    private el: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(!this.el.nativeElement.contains(event.target) && !this.isInWhiteList(event.target.className)) {
      this.state = 'out'
      setTimeout(() => this._close.next(), 500)
    }
  }

  isInWhiteList(className: string): boolean {
    let result: boolean = false

    if (this.whiteList != null) {
      this.whiteList.forEach(
        (item) => { if (item === className) result = true }
      )
    }
    return result
  }

}
