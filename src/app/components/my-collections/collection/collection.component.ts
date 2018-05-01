import {Component, Input, OnInit} from '@angular/core';
import {markdown} from 'markdown';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  @Input() explain = '';
  @Input() wordSpell = '';

  constructor() { }

  ngOnInit() {
  }

}
