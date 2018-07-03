import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Answer, Question} from '../models/Question';
import * as _ from 'lodash';
import 'rxjs/add/operator/switchMap';

class QuestionStore {

  // private questionSubject = new BehaviorSubject(new Question({
  //   question: 'Why did Abert is dad buy the horse?',
  //   options: [
  //     {text: '111', style: 'option'},
  //     {text: '222', style: 'option'},
  //     {text: '333', style: 'option'},
  //     {text: '444', style: 'option'}
  //   ],
  //   answer: {text: '333'},
  //   explain: 'He says that Farmer Easton was bidding for the horse, and you know what' +
  //   'he thinks of that man after that argument over the fencing. I should imagine that he bought it ' +
  //   'just to deny him, Well, that is what it looks like to me.'
  // }));


  private questionsSubject = new BehaviorSubject([]);
  // 当前正在处理的问题
  // public question$: Observable<Question>;
  // 章节所有问题
  public questions$: Observable<Question[]> = this.questionsSubject.asObservable();

  constructor() {
    // this.scanQuestion(0);
  }
  // 用户进行选择
  userSelect = (selectedAnswer: Answer, currentQuestionIndex: number): void => {
    // const q = this.questionSubject.getValue();
    // console.log('the difference:', _.isEqual(selectedAnswer, q['answer']));
    // if (selectedAnswer.text === q['answer']['text']) {
    //   q['result'] = true;
    //   selectedAnswer.style = 'correct';
    // } else {
    //   q['result'] = false;
    //   selectedAnswer.style = 'incorrect';
    //   // 正确的答案显示出来
    //   const index = _.findIndex(q['options'], q['answer']);
    //   q['options'][index]['style'] = 'correct';
    // }
    // q['selectedFlas'] = true;
    // this.questionSubject.next(q);

    const question = this.questionsSubject.getValue()[currentQuestionIndex];
    console.log('question:', question);
    // this.question$.subscribe(question => {
    const index = _.findIndex(question.bookAnswers, a => {
      return _.isEqual(a, selectedAnswer);
    });
    console.log('Answer index:', index);
    if (index + 1 === +question.correctAnswer) {
      question['result'] = true;
      selectedAnswer.style = 'correct';
    } else {
      question['result'] = false;
      selectedAnswer.style = 'incorrect';
      // 正确的答案显示出来
      // const index = _.findIndex(question['options'], question['answer']);
      // question['options'][index]['style'] = 'correct';
      question.bookAnswers[+question.correctAnswer - 1]['style'] = 'correct';
    }
    question.selectedFlas = true;
    // });
  }

  getValue() {
    return this.questionsSubject.getValue();
  }

  // 给问题流复制（questions$)
  setQuestions = (questions: Question[]) => {
    this.questionsSubject.next(questions);
  }

  // 设定当前问题是这个章节的第几个问题，0起
  // scanQuestion = (index) => {
  //   this.question$ = Observable.of(index).switchMap(i => {
  //     console.log('index:', i);
  //     return this.questions$.map(questions => {
  //       return questions[i];
  //     });
  //   });
  // }
}

export const questionStore = new QuestionStore();
