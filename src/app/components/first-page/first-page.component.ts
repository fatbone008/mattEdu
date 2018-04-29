import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';
import shave from 'shave';
import {SwiperedCard} from '../../models/SwiperedCard';

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

  public booksConfig: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    scrollbar: false,
    navigation: false,
    pagination: false
  };

  classicStories: Array<SwiperedCard> = [];

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

  constructor() { }

  ngOnInit() {
    this.classicStories = [
      new SwiperedCard({
        chineseTitle: '这是第一标题',
        englishTitle: 'This is the first Title',
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
        nationality: '英'
      })
    ];
  }

  ngAfterViewInit(): void {
    shave('.english-title', 50);
    shave('.chinese-title', 25);
  }

}
