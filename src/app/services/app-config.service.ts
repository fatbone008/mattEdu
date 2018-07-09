import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AppConfigService {

  private appConfigSubject = new BehaviorSubject({});

  public appConfig$: Observable<AppConfig> = this.appConfigSubject.asObservable();

  constructor(private httpClient: HttpClient) {
    this.getAccess();
  }

  getAccess = () => {
    console.log('/api/user/getAccessToken_JsapiTicket');
    this.httpClient.get(`/api/user/getAccessToken_JsapiTicket`)
      .subscribe(a => {
        this.appConfigSubject.next(a);
      });
  }
}

interface AppConfig {
  access_token ?: string;
  jsapi_ticket ?: string;
}
