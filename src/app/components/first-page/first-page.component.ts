import {AfterViewInit, Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';
import shave from 'shave';
import {SwiperedCard} from '../../models/SwiperedCard';
import {SwiperedBook} from '../../models/SwiperedBook';
import {HttpClient} from '@angular/common/http';
import {BookServiceService} from '../../services/book-service.service';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {UserServiceService} from '../../services/user-service.service';
import {DOCUMENT} from '@angular/common';
import {AppConfigService} from '../../services/app-config.service';
import {forkJoin} from 'rxjs/observable/forkJoin';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FirstPageComponent implements OnInit, AfterViewInit {

  index = 1;

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    scrollbar: false,
    navigation: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    }
  };

  wx$;

  classicStories: Array<SwiperedCard> = [];
  books: Array<SwiperedBook> = [];
  farelyStories: Array<SwiperedCard> = [];
  news: Array<SwiperedCard> = [];

  public slides = [
    {
      name: 'first style',
      imgUrl: 'https://anniesreading.oss-cn-beijing.aliyuncs.com/O1-740x455.jpg'
    }, {
      name: 'second style',
      imgUrl: 'https://anniesreading.oss-cn-beijing.aliyuncs.com/O2-740x455.jpg'
    },
    {
      name: 'first style',
      imgUrl: 'https://anniesreading.oss-cn-beijing.aliyuncs.com/breakfirst.jpg'
    }, {
      name: 'second style',
      imgUrl: 'https://anniesreading.oss-cn-beijing.aliyuncs.com/hemingway750x455.jpg'
    }, {
      name: 'second style',
      imgUrl: 'https://anniesreading.oss-cn-beijing.aliyuncs.com/war-horse750x455.jpg'
    }
  ];
  books$: Observable<SwiperedBook[]>;

  constructor(private http: HttpClient,
              private bookService: BookServiceService,
              private route: ActivatedRoute,
              private userService: UserServiceService,
              private router: Router,
              private appConfig: AppConfigService,
              @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.classicStories = [
      new SwiperedCard({
        chineseTitle: '这是第一标题，如果特别长就会被砍',
        englishTitle: 'This is the first TitleThis is the first TitleThis is the first TitleThis is the first TitleThis is the first Title',
        author: 'Fatbone',
        nationality: '中'
      }),
      new SwiperedCard({
        chineseTitle: '这是第二标题',
        englishTitle: 'This is the second Title',
        author: 'Matt',
        nationality: '美'
      }),
      new SwiperedCard({
        chineseTitle: '这是第三标题',
        englishTitle: 'This is the third Title',
        author: 'Willian',
        nationality: '意'
      })
    ];
    this.farelyStories = [
      new SwiperedCard({
        chineseTitle: '这是第一标题，如果特别长就会被砍',
        englishTitle: 'This is the first TitleThis is the first TitleThis is the first TitleThis is the first TitleThis is the first Title',
        author: 'Fatbone',
        nationality: '中'
      }),
      new SwiperedCard({
        chineseTitle: '这是第二标题',
        englishTitle: 'This is the second Title',
        author: 'Matt',
        nationality: '美'
      }),
      new SwiperedCard({
        chineseTitle: '这是第三标题',
        englishTitle: 'This is the third Title',
        author: 'Willian',
        nationality: '意'
      })
    ];
    this.news = [
      new SwiperedCard({
        chineseTitle: '这是第一标题，如果特别长就会被砍',
        englishTitle: 'This is the first TitleThis is the first TitleThis is the first TitleThis is the first TitleThis is the first Title',
        author: 'Fatbone',
        nationality: '中'
      }),
      new SwiperedCard({
        chineseTitle: '这是第二标题',
        englishTitle: 'This is the second Title',
        author: 'Matt',
        nationality: '美'
      }),
      new SwiperedCard({
        chineseTitle: '这是第三标题',
        englishTitle: 'This is the third Title',
        author: 'Willian',
        nationality: '意'
      })
    ];

    // this.bookService.getBooks().subscribe(res => {
    //   this.books = res;
    // });
    this.books$ = this.bookService.getBooks();

    // 获取用户openId
    console.log('route');
    const openId$ = this.route
      .queryParamMap
      .map(data => {
        const code = data.get('code');
        const state = data.get('state');
        return {code: code, state: state};
      })
      .switchMap(data => {
        console.log('user code: ', data.code);
        return <any>this.userService.getUserId(data.code);
        });
      // .subscribe(data => {
      //   const code = data.get('code');
      //   const state = data.get('state');
      //   console.log('获取到的用户授权code:' + code + ', state: ' + state);
      //   this.userService.getUserId(code);
      // });
    this.wx$ = forkJoin(openId$, this.appConfig.appConfig$)
    // this.wx$.subscribe(arr => console.log(arr));
    this.wx$.subscribe(val => console.log(val));

    console.log('url:', this.document.location.href);
  }

  ngAfterViewInit(): void {
    // shave('.english-title', 50);
    // shave('.chinese-title', 25);
  }


  routeToNext() {
    this.router.navigate(['/introduct']);
  }
}
