export class SwiperedCard {
  englishTitle = '';
  chineseTitle = '';
  author = '';
  private _nationality = '';

  get nationality() {
    return '[' + this._nationality + ']';
  }

  set nationality(n) {
    this._nationality = n;
  }

  constructor(options) {
    this.englishTitle = options.englishTitle;
    this.nationality = options.nationality;
    this.author = options.author;
    this.chineseTitle = options.chineseTitle;
  }

}
