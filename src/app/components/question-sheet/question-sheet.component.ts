import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {questionStore} from '../../Store/QuestionStore';
import {Answer} from '../../models/Question';

@Component({
  selector: 'app-question-sheet',
  templateUrl: './question-sheet.component.html',
  styleUrls: ['./question-sheet.component.css']
})
export class QuestionSheetComponent implements OnInit {

  question$ = questionStore.question$;

  analysis = false;

  a = 'option'

  question = 'Why did Abert is dad buy the horse?';

  buttonStyle: Observable<string> = new BehaviorSubject('option').asObservable();

  constructor() { }

  ngOnInit() {
  }

  selectOption = (selectAnswer: Answer) => {
    if (questionStore.getValue().selectedFlas) {
      return;
    }
    questionStore.userSelect(selectAnswer);
    console.log(questionStore.getValue().result);
    this.analysis = true;
  }

  //
  // answers: Array<any> = [
  //   {
  //     text: 'Because another farmer wanted him Because another farmer wanted him Because another farmer wanted him',
  //     style: 'correct'
  //   },
  //   {
  //     text: 'As a present to Albert',
  //     style: 'option'
  //   },
  //   {
  //     text: 'He needed another farmhouse',
  //     style: 'option'
  //   },
  //   {
  //     text: 'To please his wife',
  //     style: 'incorrect'
  //   }
  // ]
}
