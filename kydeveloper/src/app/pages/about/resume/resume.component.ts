import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SideModalComponent } from '../../../components/side-modal/side-modal.component';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss', './../shared-about.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor(private _router: Router,) { }

  _showSideModal: boolean = false

  dropDownItems: string[] = [ "all", "development", "design", "self-help" ]

  @ViewChild(SideModalComponent) set sm(sideModal: SideModalComponent) {
    if (sideModal !=  null) {
      this._sideModalCloseSub = sideModal._close.subscribe(
        () => this.hideSideModal()
      )
    }
  }
  _sideModalCloseSub: Subscription
  _routerSub: Subscription

  ngOnInit() {
    this.matchSubRoute(this._router.routerState.snapshot.url)
    this._routerSub = this._router.events.subscribe((_event) => {
        if(_event instanceof NavigationEnd) {
          this.matchSubRoute(_event.url)
        }
      })
  }

  ngOnDestroy() {
    this._routerSub.unsubscribe()
    if (this._sideModalCloseSub != null) this._sideModalCloseSub.unsubscribe()
  }

  hideSideModal() {
    this._sideModalCloseSub.unsubscribe()
    this._showSideModal = false
    this.routeTo("")
  }

  showSideModal() {
    this._showSideModal = true
  }

  showRecommend() {
    this.routeTo("speak")
  }

  routeTo(route:string) {
    const cleanRoute: string = route.replace(/\s/g, "")
    this._router.navigate([`/about/resume/${cleanRoute}`])
  }

  matchSubRoute(url: string): void {
    this._showSideModal = url.match(/\/about\/resume\/([a-zA-Z0-9]+)$/i) != null
  }

}
