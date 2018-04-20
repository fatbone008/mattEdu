import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AudioCounterService} from './audio-counter.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/distinct';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import {Recorder, TextBundler} from '../../models/Recorder';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit, OnDestroy{
  tracer$: Observable<number>;

  @ViewChild('player') player: ElementRef;

  recorders;

  scrollTo: number = 0;

  constructor(private audioCounterServices: AudioCounterService) {

  }

  ngOnInit() {
    // mock
    this.recorders = new Recorder([
      new TextBundler({time: '0:00', text: 'hello'}),
      new TextBundler({time: '00:34', text: 'Nice to meet you'}),
      new TextBundler({time: '0:3', text: 'oh nice!'}),
      new TextBundler({time: '0:5', text: 'can we talk'}),
      new TextBundler({time: '0:13', text: 'matt is awesome guy'}),
      new TextBundler({time: '0:35', text: 'does he married?'}),
      new TextBundler({time: '0:23', text: 'who knows'}),
      new TextBundler({time: '0:15', text: 'what happen'})
    ]);
    const hashingRecorders = this.recorders.hash();
    this.tracer$ = this.audioCounterServices.counter$
      .map(seccond => Math.floor(seccond))
      .distinct()
      .do(second => {
        // 激活的行
        if (hashingRecorders[second]) {
          console.log(hashingRecorders[second]);
          this.scrollTo = second;
        }
      });
    this.audioCounterServices.startTracing(this.player.nativeElement, 700);
    this.tracer$.subscribe(console.log);


    console.log(this.recorders.hash());
  }


  ngOnDestroy(): void {
    this.audioCounterServices.stopTracing();
  }

}
