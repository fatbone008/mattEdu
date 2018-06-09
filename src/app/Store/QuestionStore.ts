import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Answer, Question} from '../models/Question';
import * as _ from 'lodash';

class QuestionStore {

  private questionSubject = new BehaviorSubject(new Question({
    question: 'Why did Abert is dad buy the horse?',
    options: [
      {text: '111', style: 'option'},
      {text: '222', style: 'option'},
      {text: '333', style: 'option'},
      {text: '444', style: 'option'}
    ],
    answer: {text: '333'},
    explain: 'He says that Farmer Easton was bidding for the horse, and you know what' +
    'he thinks of that man after that argument over the fencing. I should imagine that he bought it ' +
    'just to deny him, Well, that is what it looks like to me.'
  }));

  public question$: Observable<Question> = this.questionSubject.asObservable();

  // 初始化问题
  initializeQuestion = (question: Question): void => {
    this.questionSubject.next(this.questionSubject.getValue());
  }

  // 用户进行选择
  userSelect = (selectedAnswer: Answer): void => {
    let q = this.questionSubject.getValue();
    console.log('the difference:', _.isEqual(selectedAnswer, q['answer']));
    if (selectedAnswer.text === q['answer']['text']) {
      q['result'] = true;
      selectedAnswer.style = 'correct';
    } else {
      q['result'] = false;
      selectedAnswer.style = 'incorrect';
      // 正确的答案显示出来
      const index = _.findIndex(q['options'], q['answer']);
      q['options'][index]['style'] = 'correct';
    }
    q['selectedFlas'] = true;
    this.questionSubject.next(q);
  }

  getValue() {
    return this.questionSubject.getValue();
  }

  cloneQuestion(question: Question) {
    return _.cloneDeep(this.questionSubject.getValue());
  }
}

export const questionStore = new QuestionStore();
