import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';
import { SubscribeActions } from '../../../../actions';

@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.scss']
})
export class RegisterSuccessComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _subscribeActions: SubscribeActions
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        console.log(params)
        if (params['code'] != null) {
          this._subscribeActions.confirm(params['code'])
        } else {
          this.router.navigate(["/subscribe"])
        }
      })
  }

  ngAfterViewInit() {}

}
