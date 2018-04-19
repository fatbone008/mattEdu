import { Component, OnInit } from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  index = 1;

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    scrollbar: false,
    navigation: false,
    pagination: false
  };

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
  }

}
