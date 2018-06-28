import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';
import {SwiperedBook} from '../../models/SwiperedBook';
import shave from 'shave';
import {Router} from '@angular/router';

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
    freeMode: true,
    observer: true
  };

  @Input() booksContent: Array<SwiperedBook>

  constructor(
    private router: Router) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    shave('.english-title', 50);
    shave('.chinese-title', 25);
    shave('.author', 25);
  }

  selectBook = (bookid, bookName) => {
    console.log('进入' + bookid + '目录');

    this.router.navigate(['/chapter', {bookId: 1, title: '你好'}]);
  }
}
