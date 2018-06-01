export class Answer {
  text ?: string;
  style ? = 'option';
  constructor(answer) {
    this.text = answer.text;
  }
}

export class Question {
  question ?: string;

  options ?: Array<Answer>;

  answer ?: Answer;

  // userChoosen ?: string;

  result ?: boolean;

  explain ?: string;

  selectedFlas ? = false;

  constructor(qt) {
    this.question = qt.question;
    this.options = qt.options;
    this.answer = qt.answer;
    this.explain = qt.explain;

    // 用户所选答案
    // this.userChoosen = null;
    // 用户答案是否正确
    this.result = false;
    // 用户是否已经做出选择
    this.selectedFlas = false;
  }
}
