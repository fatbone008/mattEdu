import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
  @Input()
  chapters = [{
    chapterName: '1'
  }, {
    chapterName: '1'
  }, {
    chapterName: '1'
  }, {
    chapterName: '1'
  }]

  bookId;
  title = '未知书';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .map(params => {
        const bookid = params.get('bookId');
        const title = params.get('title');
        return {bookId: bookid, title: title};
      })
      .subscribe( value => {
        this.bookId = value.bookId;
        this.title = value.title;
        console.log(value);
      })
  }

}
