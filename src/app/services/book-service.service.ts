import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SwiperedBook} from '../models/SwiperedBook';
import 'rxjs/add/operator/do';
import * as _ from 'lodash';

@Injectable()
export class BookServiceService {

  constructor(private http: HttpClient) { }

  /**
   * 获取所有可阅读的书籍
   * @returns {Observable<Object>}
   */
  getBooks = () => {
    return this.http.get<SwiperedBook[]>('/api/books')
      .do(res => {
        console.log('getBooks:', res);
      });
  }

  /**
   * 获取某书的所有章节
   * @param bookid  - 书籍id
   * @returns {Observable<Object>}
   */
  getBookChapterById = (bookid) => {
    return this.http.get<any[]>(`/api/books/${bookid}`)
      .do(res => {
        console.log(res);
      });
  }

  /**
   * 获取指定书籍某章的所有内容
   * @param bookId
   * @param chapterId
   * @returns {Observable<any>}
   */
  getAudiosByBookChapter = (bookId, chapterId) => {
    return this.http.get<any[]>(`api/books/${bookId}/${chapterId}`)
      .map(res => {
        return _.orderBy(res, ['id'], ['asc']);
      })
      .do(res => {
        console.log(`api/books/${bookId}/${chapterId}`, res);
      });
  }

  /**
   * 获取指定书籍指定章节的音频地址
   * @param bookId
   * @param chapterId
   * @returns {Observable<Object>}
   */
  getAudioByBookChapter = (bookId, chapterId) => {
    return this.http.get<any>(`api/books/audio/${bookId}/${chapterId}`)
      .do(res => {
        console.log(`api/books/audio/${bookId}/${chapterId}`, res);
      });
  }
}
