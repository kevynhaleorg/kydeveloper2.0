import { Injectable } from '@angular/core';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactService {

  constructor() { }

  submit(request:IContactRequest): Observable<any> {
    console.log(request)
    return IfObservable.of("test").delay(5000)
  }

}

export interface IContactRequest {
  firstName:string;
  lastName: string;
  email:string;
  message:string;
  phoneNumber?:string;
}
