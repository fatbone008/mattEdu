import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';
import {SwiperedCard} from '../../models/SwiperedCard';
import shave from 'shave';

@Component({
  selector: 'app-swipered-cards-component',
  templateUrl: './swipered-cards-component.component.html',
  styleUrls: ['./swipered-cards-component.component.css']
})
export class SwiperedCardsComponentComponent implements OnInit, AfterViewInit {

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

  @Input() cardsContent: Array<SwiperedCard>

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    shave('.english-title', 50);
    shave('.chinese-title', 25);
    shave('.author', 25);
  }

}
