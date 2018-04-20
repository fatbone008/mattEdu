import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AudioCounterService} from './audio-counter.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/distinct'

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit, OnDestroy{
  tracer$: Observable<number>;

  @ViewChild('player') player: ElementRef;

  constructor(private audioCounterServices: AudioCounterService) { }

  ngOnInit() {
    this.tracer$ = this.audioCounterServices.counter$.distinct();
    this.audioCounterServices.startTracing(this.player.nativeElement, 500);
    this.tracer$.subscribe(console.log);
  }


  ngOnDestroy(): void {
    this.audioCounterServices.stopTracing();
  }

}
