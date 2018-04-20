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

  constructor(private audioCounterServices: AudioCounterService) {

  }

  ngOnInit() {
    // mock
    const recorders = new Recorder([
      new TextBundler({time: '0:00', text: 'hello'}),
      new TextBundler({time: '00:34', text: 'Nice to meet you'}),
      new TextBundler({time: '0:3', text: 'greeting'}),
      new TextBundler({time: '1:30', text: 'what happen'})
    ]);
    const hashingRecorders = recorders.hash();
    this.tracer$ = this.audioCounterServices.counter$
      .map(seccond => Math.floor(seccond))
      .distinct()
      .do(second => {
        // console.log('do:', hashingRecorders[second]);
        if (hashingRecorders[second]) {
          console.log(hashingRecorders[second]);
        }
      });
    this.audioCounterServices.startTracing(this.player.nativeElement, 700);
    this.tracer$.subscribe(console.log);


    console.log(recorders.hash());
  }


  ngOnDestroy(): void {
    this.audioCounterServices.stopTracing();
  }

}
