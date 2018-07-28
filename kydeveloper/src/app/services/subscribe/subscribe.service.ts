import { Injectable } from '@angular/core';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SubscribeService {

  constructor() { }

  submit(email: string): Observable<any> {
    return IfObservable.of(email).delay(1000)
  }

}
