import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';
import {SwiperedBook} from '../../models/SwiperedBook';
import shave from 'shave';

@Component({
  selector: 'app-swipered-books-component',
  templateUrl: './swipered-books-component.component.html',
  styleUrls: ['./swipered-books-component.component.css']
})
export class SwiperedBooksComponentComponent implements OnInit, AfterViewInit {

  booksConfig: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    scrollbar: false,
    navigation: false,
    pagination: false,
    spaceBetween: 10.6,
    freeMode: true
  };

  @Input() booksContent: Array<SwiperedBook>

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    shave('.english-title', 50);
    shave('.chinese-title', 25);
    shave('.author', 25);
  }
}
