import { Component, OnInit, ViewChild } from '@angular/core';
import { KySelectDropdownComponent } from '../../components/ky-select-dropdown/ky-select-dropdown.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  dropDownItems: string[] = [ "biography", "reading list", "resume", "contact" ]
  @ViewChild(KySelectDropdownComponent) dropdown: KySelectDropdownComponent;

  constructor(private _router: Router) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dropdown._selected.skip(1).subscribe(
      (selected) => {
        this.routeTo(selected)
      })
  }

  navigate(route:string) {
    this.dropdown._selected.next(route)
    this.routeTo(route)
  }

  routeTo(route:string) {
    const cleanRoute: string = route.replace(/\s/g, "")
    this._router.navigate([`/about/${cleanRoute}`])
  }




}
