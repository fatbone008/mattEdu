import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {HttpClient} from '@angular/common/http';
import {BookServiceService} from '../../services/book-service.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
  // @Input()
  // chapters = [{
  //   chapterName: '1'
  // }, {
  //   chapterName: '1'
  // }, {
  //   chapterName: '1'
  // }, {
  //   chapterName: '1'
  // }]

  Chapters$: Observable<any>;
  title = '----';
  bookId;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private bookService: BookServiceService) { }ççç

  ngOnInit() {
    this.Chapters$ = this.route.paramMap
      .map(params => {
        this.bookId = params.get('bookId');
        this.title = params.get('title');
        return {bookId: this.bookId, title: this.title};
      })
      .switchMap(value => {
        return this.bookService.getBookChapterById(value.bookId);
      });
      // .subscribe( chapters => {
      //   this.bookId = chapters;
      //   // this.title = value.title;
      //   console.log(chapters);
      // });
  }

  startReading = (chapter) => {
    this.router.navigate([`/audio`, {bookId: this.bookId, chapterId: chapter.id}]);
  }

}
