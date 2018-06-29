import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {HttpClient} from '@angular/common/http';
import {BookServiceService} from '../../services/book-service.service';

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
  title = '----';

  constructor(private route: ActivatedRoute,
              private bookService: BookServiceService) { }

  ngOnInit() {
    this.route.paramMap
      .map(params => {
        const bookid = params.get('bookId');
        const title = params.get('title');
        return {bookId: bookid, title: title};
      })
      .switchMap(value => {
        return this.bookService.getBookChapterById(value.bookId);
      })
      .subscribe( chapters => {
        // this.bookId = value.bookId;
        // this.title = value.title;
        console.log(chapters);
      });
  }

}
