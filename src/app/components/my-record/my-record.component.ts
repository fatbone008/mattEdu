import { Component, OnInit } from '@angular/core';
import {WordRateItem} from '../../models/WordRateItem';

@Component({
  selector: 'app-my-record',
  templateUrl: './my-record.component.html',
  styleUrls: ['./my-record.component.css']
})
export class MyRecordComponent implements OnInit {

  cardTitle1;
  card1Correct;
  items;
  card1Incorrect;

  cardTitle2;
  card2Correct;
  card2Incorrect

  constructor() { }

  ngOnInit() {
    this.cardTitle1 = '阅读小考';
    this.cardTitle2 = '词汇量小考';
    this.card1Correct = 97;
    this.card1Incorrect = 33;
    this.card2Correct = 68;
    this.card2Incorrect = 28;

    this.items = [
      new WordRateItem({
        name: '布鲁斯',
        count: 46100,
        headImg: './assets/images/headPic.png'
      }),
      new WordRateItem({
        name: '布鲁斯',
        count: 46100,
        headImg: './assets/images/headPic.png'
      }),
      new WordRateItem({
        name: '布鲁斯',
        count: 46100,
        headImg: './assets/images/headPic.png'
      }),
      new WordRateItem({
        name: '布鲁斯',
        count: 46100,
        headImg: './assets/images/headPic.png'
      }),
      new WordRateItem({
        name: '布鲁斯',
        count: 46100,
        headImg: './assets/images/headPic.png'
      }),
      new WordRateItem({
        name: '布鲁斯',
        count: 46100,
        headImg: './assets/images/headPic.png'
      }),
      new WordRateItem({
        name: '布鲁斯',
        count: 46100,
        headImg: './assets/images/headPic.png'
      })
    ];
  }

}
