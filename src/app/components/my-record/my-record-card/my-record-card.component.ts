import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-my-record-card',
  templateUrl: './my-record-card.component.html',
  styleUrls: ['./my-record-card.component.css']
})
export class MyRecordCardComponent implements OnInit, AfterViewInit {

  @Input() cardTitle;
  @Input() correctRate;
  @Input() incorrectRate;

  @Input() idName;
  chart;
  rate;

  constructor() { }

  ngOnInit() {
    this.rate = Math.floor(this.correctRate / (this.incorrectRate + this.correctRate) * 100);
  }

  ngAfterViewInit(): void {
    this.chart = new Chart(this.idName, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [this.correctRate, this.incorrectRate],
          backgroundColor: ['#FF4827', '#2A7DEE'],
          borderWidth: [1, 1]
        }],

      },
      options: {
        cutoutPercentage: 80
      }
    });
  }



}
