import { Injectable } from '@angular/core';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SubscribeService {

  constructor() { }

  submit(email: string): Observable<any> {
    return IfObservable.of(email).delay(1000)
  }

  confirm(code:string): Observable<ISubscribeConfirmResponse> {
    return IfObservable.of(
        { email: 'temp@email.com', confirmed: true}).delay(1000)
  }

  unsubscribe(code:string): Observable<any> {
    return IfObservable.of(
        { email: 'temp@email.com', unsubscribed: true}).delay(1000)
  }

}

export interface ISubscribeConfirmResponse {
    email: string,
    confirmed: boolean
}

export interface ISubscribeUnsubResponse {
    email: string,
    unsubscribed: boolean
}
