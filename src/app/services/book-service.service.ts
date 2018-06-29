import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SwiperedBook} from '../models/SwiperedBook';
import 'rxjs/add/operator/do';

@Injectable()
export class BookServiceService {

  constructor(private http: HttpClient) { }

  getBooks = () => {
    return this.http.get<SwiperedBook[]>('/api/books')
      .do(res => {
        console.log('getBooks:', res);
      });
  }

  getBookChapterById = (bookid) => {
    return this.http.get<any[]>(`/api/books/${bookid}`)
      .do(res => {
        console.log(res);
      });
  }
}
