import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/of';
import {questionStore} from '../../Store/QuestionStore';
import {Answer} from '../../models/Question';
import {BookServiceService} from '../../services/book-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-question-sheet',
  templateUrl: './question-sheet.component.html',
  styleUrls: ['./question-sheet.component.css']
})
export class QuestionSheetComponent implements OnInit {

  // question$ = questionStore.question$;
  questions$ = questionStore.questions$;
  qCount = 0;
  currentQuestionIndex = 0;

  analysis = false;

  a = 'option';

  question = 'Why did Abert is dad buy the horse?';


  constructor(private bookService: BookServiceService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.bookService.getQuestionByChapter(1)
      .subscribe(questions => {
        this.qCount = questions.length;
        questionStore.setQuestions(questions);
      });
  }

  selectOption = (selectAnswer: Answer) => {
    if (questionStore.getValue()[this.currentQuestionIndex].selectedFlas) {
      return;
    }
    questionStore.userSelect(selectAnswer, this.currentQuestionIndex);
    // console.log(questionStore.getValue().result);
    this.analysis = true;
  }

  nextQuestion = () => {
    this.currentQuestionIndex++;
    // console.log('questionStore.getValue().length:', questionStore.getValue().length);
    // console.log('this.currentQuestionIndex:', this.currentQuestionIndex);
    // questionStore.scanQuestion(this.currentQuestionIndex);

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
