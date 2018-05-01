import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-word-rate',
  templateUrl: './word-rate.component.html',
  styleUrls: ['./word-rate.component.css']
})
export class WordRateComponent implements OnInit {

  @Input() items
  constructor() { }

  ngOnInit() {
  }

}
