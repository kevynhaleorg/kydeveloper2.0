import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../models/post.model';
import { projects, project } from './portfolio-mock';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PortfolioService {

  constructor() { }

  getProjects(): Observable<IProjectsResponse> {
    return of({projects: projects}).delay(1000)
  }

  getSingleProject(projectId: string): Observable<IProjectSingleResponse> {
    return of({project: project}).delay(1000)
  }

}

export interface IProjectsResponse {
  projects?: Post[]
}

export interface IProjectSingleResponse {
  project?: Post
}
