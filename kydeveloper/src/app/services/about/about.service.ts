import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { IfObservable } from 'rxjs/observable/IfObservable';
import { item1, item2, item3, biography } from './about-mock'

@Injectable()
export class AboutService {

  constructor() { }

  getReadingList(request: IReadingListRequest): Observable<IReadingListResponse> {
    return IfObservable.of({page: request.page, pageSize: request.pageSize, category: request.category, results: [item1, item2, item3]}).delay(1000)
  }

  getReadingItem(id: string): Observable<IReadingItem> {
    return IfObservable.of(item1).delay(1000)
  }

  recommendBook(request: IBookRecommendationRequest): Observable<void> {
    return IfObservable.of(null).delay(1000)
  }

  getBiography(): Observable<string> {
    return IfObservable.of(biography).delay(1000)
  }

  getResume(): Observable<IResumeResponse> {
    return IfObservable.of(null).delay(1000)
  }

  getPresentations(): Observable<Array<IPresentation>> {
    return IfObservable.of([]).delay(1000)
  } 

  requestPresentation(request: IPresentationRequest): Observable<void> {
    return IfObservable.of(null).delay(1000)
  }

}

export interface IResumeResponse {
  summary: string;
  jobExperience: Array<IResumeExperience>;
  education: Array<IResumeExperience>;
  skills: Array<string>
}

export interface IResumeExperience {
  business: string;
  image: string;
  startDate: string;
  endDate: string;
  summary: string;
}

export interface IBookRecommendationRequest {
  name: string;
  bookUrl: string;
  email: string;
  why: string;
}

export interface IReadingListRequest {
  category: string;
  page: number;
  pageSize: number;
}

export interface IReadingListResponse {
  page: number
  pageSize: number
  category: string
  results: Array<IReadingItem>
}

export interface IReadingItem {
  id: string;
  coverImage: String;
  title: string;
  author: string;
  promoUrl: string;
  summary: string;
  dateAdded: string;
  rating: number;
  category: string;
}

export interface IPresentation {
  url: string;
  event: string;
  date: string;
  summary: string;
}

export interface IPresentationRequest {
  name: string;
  email: string;
  event: string;
  summary: string;
  date: string;
}