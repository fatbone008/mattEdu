import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/User';
import {catchError} from 'rxjs/operators';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';

@Injectable()
export class UserServiceService {

  private userSubject = new BehaviorSubject(null);

  public user$: Observable<User> = this.userSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  getUserId = (code: string) => {
    this.httpClient.get('/api/getOpenId?code=' + code)
      .pipe(
        catchError(this.handleError)
      )
      .subscribe(res => {
        console.log('获取到的OpenId', res);
        this.userSubject.next(new User({user_id: res['openid']}));
      });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    alert('连接出错，请稍后再试 T.T');
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      '连接出错，请稍后再试 T.T');
  };
}
