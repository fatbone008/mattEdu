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
  chapterId

  a = 'option';

  question = 'Why did Abert is dad buy the horse?';


  constructor(private bookService: BookServiceService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.chapterId = params.get('chapterId');

        this.bookService.getQuestionByChapter(this.chapterId)
          .subscribe(questions => {
            this.qCount = questions.length;
            questionStore.setQuestions(questions);
          });
      });
  }

  selectOption = (selectAnswer: Answer) => {
    if (questionStore.getValue()[this.currentQuestionIndex].selectedFlas) {
      return;
    }
    questionStore.userSelect(selectAnswer, this.currentQuestionIndex);
    this.analysis = true;
  }

  nextQuestion = () => {
    this.currentQuestionIndex++;
  }
}
