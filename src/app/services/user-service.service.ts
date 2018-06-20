import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }

  getUserId = (code: string) => {
    this.httpClient.get('/api/getOpenId?code=' + code).subscribe(
      res => console.log('获取到的OpenId', res)
    );
  }
}
