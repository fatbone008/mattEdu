import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-question-sheet',
  templateUrl: './question-sheet.component.html',
  styleUrls: ['./question-sheet.component.css']
})
export class QuestionSheetComponent implements OnInit {

  a = 'option'

  question = 'Why did Abert is dad buy the horse?';

  answers: Array<any> = [
    {
      text: 'Because another farmer wanted him Because another farmer wanted him Because another farmer wanted him',
      style: 'correct'
    },
    {
      text: 'As a present to Albert',
      style: 'option'
    },
    {
      text: 'He needed another farmhouse',
      style: 'option'
    },
    {
      text: 'To please his wife',
      style: 'incorrect'
    }
  ]

  buttonStyle: Observable<string> = new BehaviorSubject('option').asObservable();

  constructor() { }

  ngOnInit() {
  }

}
