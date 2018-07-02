import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AudioCounterService} from './audio-counter.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import {Recorder, TextBundler} from '../../models/Recorder';
import {BookServiceService} from '../../services/book-service.service';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/throttleTime';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit, OnDestroy, AfterViewInit {
  tracer$: Observable<number>;
  recorders$: Observable<Recorder>;

  @ViewChild('player') player: ElementRef;
  @ViewChild('container') container: ElementRef;
  @ViewChild('fei') fei;

  audioURL$: Observable<string> = Observable.of('');

  scrollTo = 0;

  constructor(private audioCounterServices: AudioCounterService,
              private bookServices: BookServiceService,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    console.log('Audio Component 初始化');
    // 获取录音的文本和时间
    this.recorders$ = this.route.paramMap
      .map(params => {
        const bookId = params.get('bookId');
        const chapterId = params.get('chapterId');
        return {'bookId': bookId, 'chapterId': chapterId};
      })
      .switchMap(o => {
        console.log('请求/api/books/bookId/chapterId');
        return this.bookServices.getAudiosByBookChapter(o.bookId, o.chapterId);
      })
      .map(audios => {
        console.log('转recorders');
        const records = audios.map(o => {
          return new TextBundler(o);
        });
        return new Recorder(records);
      });
    // 获得音频地址
    this.audioURL$ = this.route.paramMap
      .map(params => {
        const bookId = params.get('bookId');
        const chapterId = params.get('chapterId');
        return {'bookId': bookId, 'chapterId': chapterId};
      })
      .switchMap(info => {
        return this.bookServices.getAudioByBookChapter(info.bookId, info.chapterId);
      })
      .map(res => {
        // console.log('map:', res);
        return res.audioURL;
      });
    // this.audioURL$.subscribe(o => console.log('---------------', o));
  }

  ngOnDestroy(): void {
    this.audioCounterServices.stopTracing();
  }

  ngAfterViewInit(): void {
    this.audioCounterServices.startTracing(this.player.nativeElement, 700);
    this.audioCounterServices.counter$
        .map(seccond => Math.floor(seccond))
        .distinctUntilChanged()
        .withLatestFrom(this.recorders$.map(audios => audios.hash()))
      .subscribe(x => {
        console.log('每秒触发：', x);
        const second = x[0];
        const hashingRecorders = x[1];
        if (hashingRecorders[second]) {
              console.log(x[1][x[0]]);
              this.scrollTo = second;
              // console.log(document.getElementById(second + ''));
              try {
                document.getElementById(second + '').scrollIntoView({block: 'center', behavior: 'smooth'});
              } catch (err) {
                document.getElementById(second + '').scrollIntoView();
              }
        }
      });
  }

}
