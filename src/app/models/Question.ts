export class Answer {
  text ?: string;
  style ? = 'option';
  answerIndex ?: number;
  answerText ?: string;
  bookQuestionId ?: number;
  constructor(answer) {
    this.text = answer.text;
    this.answerIndex = answer.answerIndex;
    this.answerText = answer.answerText;
    this.bookQuestionId = answer.bookQuestionId;
  }
}

export class Question {
  question ?: string;

  options ?: Array<Answer>;

  answer ?: Answer;

  // userChoosen ?: string;

  result ?: boolean;

  explaination ?: string;

  selectedFlas ? = false;

  questionIndex ?: number;

  correctAnswer ?: string;

  chapterId ?: number;

  bookAnswers ?: Array<Answer>;

  constructor(qt) {
    this.question = qt.question;
    this.options = qt.options;
    this.answer = qt.answer;
    this.explaination = qt.explaination;
    this.chapterId = qt.chapterId;
    this.questionIndex = qt.questionIndex;
    this.correctAnswer = qt.correctAnswer;

    // 用户所选答案
    // this.userChoosen = null;
    // 用户答案是否正确
    this.result = false;
    // 用户是否已经做出选择
    this.selectedFlas = false;
  }
}
