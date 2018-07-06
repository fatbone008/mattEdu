export class Recorder {
  id: number;
  name: string;
  book: string;
  recordObjs: Array<TextBundler>;

  constructor(textBundlers: Array<TextBundler>){
    this.recordObjs = textBundlers;
  }

  public hash = () => {
    let o = {};
    this.recordObjs.map( textBundler => {
      o[textBundler.time] = textBundler.text;
    })
    return o;
  }
}

export class TextBundler {
  time: number;

  text: string;

  imgUrl ?: string;

  constructor(options) {
    if (typeof options['time'] === 'string') {
      const a = options['time'].split(':').map(n => Number(n));
      this.time = a[0] * 60 + a[1];
    } else {
      this.time = 0;
    }
    this.text = options['text'] || '';
    if (options['imgUrl']) {
      this.imgUrl = options['imgUrl'];
    }
  }
}
