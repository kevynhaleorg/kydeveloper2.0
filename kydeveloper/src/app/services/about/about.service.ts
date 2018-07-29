import { Injectable } from "../../../../node_modules/@angular/core";
import { Observable } from "../../../../node_modules/rxjs/Observable";
import { IfObservable } from "../../../../node_modules/rxjs/observable/IfObservable";

@Injectable()
export class AboutService {

  constructor() { }

  item1: IReadingItem = {
    id: "id1",
    coverImage: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj6g6bX1MTcAhWry4MKHXxICdoQjRx6BAgBEAU&url=https%3A%2F%2Fwww.amazon.ca%2FDesign-Patterns-Elements-Reusable-Object-Oriented%2Fdp%2F0201633612&psig=AOvVaw0pKSHS0eUJcgUD7oqRi2hA&ust=1532965777706536",
    title: "Design Patterns",
    author: "Gamma",
    promoUrl: "https://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612/ref=sr_1_3?ie=UTF8&qid=1532879329&sr=8-3&keywords=design+patterns&dpID=51szD9HC9pL&preST=_SX218_BO1,204,203,200_QL40_&dpSrc=srch",
    summary: "This book is great",
    dateAdded: "10/22/2012",
    rating: 8,
    category: "development"
  }

  getReadingList(page: number): Observable<IReadingListResponse> {
    return IfObservable.of({page: page, results: [this.item1]}).delay(2000)
  }

  getReadingItem(id: string): Observable<IReadingItem> {
    return IfObservable.of(this.item1).delay(2000)
  }

  getBiography(): Observable<any> {
    return IfObservable.of("string").delay(2000)
  }

  getResume(): Observable<IResumeResponse> {
    return IfObservable.of(null).delay(2000)
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

export interface IReadingListResponse {
  page: number,
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