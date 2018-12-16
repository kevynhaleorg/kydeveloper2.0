import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../models/post.model';
import { projects } from './portfolio-mock';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PortfolioService {

  constructor() { }

  getProjects(): Observable<IProjectsResponse> {
    return of({projects: projects}).delay(1000)
  }

}

export interface IProjectsResponse {
  projects?: Post[]
}
