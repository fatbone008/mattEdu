import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GetOpenIdService {

  appId = 'wx45c5430dac975c29'

  redirect_uri = 'http://anniesreading.com:3000/firstPage'

  response_type = 'code'

  scope = 'snsapi_base'



  constructor(private httpClient: HttpClient) { }

  getOpenId = () => {
    const outputURL = encodeURIComponent(this.redirect_uri);
  }
}
