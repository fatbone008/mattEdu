export class SwiperedBook {
  id;
  englishTitle = '';
  chineseTitle = '';
  img = '';
  chineseAuthor = '';
  englighAuthor = '';

  private _level = '';

  get level() {
    return '[' + this._level + ']';
  }

  set level(n) {
    this._level = n;
  }

  constructor(options) {
    this.id = options['id'];
    this.englishTitle = options.englishTitle;
    this.chineseTitle = options.chineseTitle;
    this.level = options.level;
    this.chineseAuthor = options.chineseAuthor;
    this.englighAuthor = options.englighAuthor;
    this.img = options.img;
  }

}
