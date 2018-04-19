import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AudioCounterService {

  private subject = new BehaviorSubject(0);

  counter$: Observable<number> = this.subject.asObservable();

  constructor() { }

  count(player, period){
  }

}
