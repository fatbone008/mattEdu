import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/interval';

@Injectable()
export class AudioCounterService {

  private subject = new BehaviorSubject(0);

  counter$: Observable<number> = this.subject.asObservable();

  tracerInterval: any;

  constructor() { }

  startTracing(player, period: number){
    this.tracerInterval = Observable.interval(period).subscribe(() => {
      // console.log('subject player emit: ', player.currentTime);
      this.subject.next(player.currentTime);
    });
  }

  stopTracing(){
    this.tracerInterval.unsubscribe();
  }
}
