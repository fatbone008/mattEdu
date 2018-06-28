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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap(params => {
        return params.get('bookId');
      })
      .subscribe( bookId => {
        this.bookId = bookId;
        console.log(this.bookId);
      })
  }

}
