import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';
import shave from 'shave';
import {SwiperedCard} from '../../models/SwiperedCard';
import {SwiperedBook} from '../../models/SwiperedBook';
import {HttpClient} from '@angular/common/http';
import {BookServiceService} from '../../services/book-service.service';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';

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

  classicStories: Array<SwiperedCard> = [];
  books: Array<SwiperedBook> = [];
  farelyStories: Array<SwiperedCard> = [];
  news: Array<SwiperedCard> = [];

  public slides = [
    {
      name: 'first style',
      imgUrl: './assets/images/slide1.jpg'
    }, {
      name: 'second style',
      imgUrl: './assets/images/slide2.jpg'
    },
    {
      name: 'first style',
      imgUrl: './assets/images/slide3.jpg'
    }, {
      name: 'second style',
      imgUrl: './assets/images/slide4.jpg'
    }
  ];
  books$: Observable<SwiperedBook[]>;

  constructor(private http: HttpClient,
              private bookService: BookServiceService,
              private route: ActivatedRoute,
              private router: Router) { }

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
    // this.books = [
    //   new SwiperedBook({
    //     img: 'https://fatbone008-snapshot.oss-cn-beijing.aliyuncs.com/matt/bookpage.png',
    //     englighAuthor: 'alipapa',
    //     englishTitle: 'The old man and sea',
    //     chineseAuthor: '阿里巴巴',
    //     chineseTitle: '老人与海',
    //     level: '中'
    //   }),
    //   new SwiperedBook({
    //     img: '../../../assets/images/bookpage.png',
    //     englighAuthor: 'alipapa',
    //     englishTitle: 'The old man and sea',
    //     chineseAuthor: '阿里巴巴',
    //     chineseTitle: '老人与海',
    //     level: '中'
    //   }),
    //   new SwiperedBook({
    //     img: '../../../assets/images/bookpage.png',
    //     englighAuthor: 'alipapa',
    //     englishTitle: 'The old man and sea',
    //     chineseAuthor: '阿里巴巴',
    //     chineseTitle: '老人与海',
    //     level: '中'
    //   })
    // ];

    console.log('route');
    this.route
      .queryParamMap
      .pipe(map(params => {
        console.log('行不行code', params.get('code') || 'None');
      }));
  }

  ngAfterViewInit(): void {
    // shave('.english-title', 50);
    // shave('.chinese-title', 25);
  }

  requestJSON() {
    this.http.get('/api/testingJson').subscribe( res => {
      console.log(res);
      this.routeToNext();
    });
  }

  routeToNext(){
    this.router.navigate(['/introduct']);
  }
}
