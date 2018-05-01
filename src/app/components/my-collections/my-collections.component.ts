import { Component, OnInit } from '@angular/core';
import {Dictionary} from '../../models/Dictionary';

@Component({
  selector: 'app-my-collections',
  templateUrl: './my-collections.component.html',
  styleUrls: ['./my-collections.component.css']
})
export class MyCollectionsComponent implements OnInit {

  dictionaries: Array<Dictionary>;

  constructor() { }

  ngOnInit() {
    this.dictionaries = [
      new Dictionary({
        wordSpell: 'Cat',
        explain: `
          cat: 英 [kæt] 美 [kæt] <br>
          n.猫； 猫科动物； 狠毒的女人； 爵士乐爱好者<br>
          vt.把（锚）吊放在锚架上；
          `
      }),
      new Dictionary({
        wordSpell: 'Cat',
        explain: `
          cat: 英 [kæt] 美 [kæt] <br>
          n.猫； 猫科动物； 狠毒的女人； 爵士乐爱好者<br>
          vt.把（锚）吊放在锚架上；
          `
      }),
      new Dictionary({
        wordSpell: 'Cat',
        explain: `
          cat: 英 [kæt] 美 [kæt] <br>
          n.猫； 猫科动物； 狠毒的女人； 爵士乐爱好者<br>
          vt.把（锚）吊放在锚架上；
          `
      }),
      new Dictionary({
        wordSpell: 'Cat',
        explain: `
          cat: 英 [kæt] 美 [kæt] <br>
          n.猫； 猫科动物； 狠毒的女人； 爵士乐爱好者<br>
          vt.把（锚）吊放在锚架上；
          `
      }),
      new Dictionary({
        wordSpell: 'Cat',
        explain: `
          cat: 英 [kæt] 美 [kæt] <br>
          n.猫； 猫科动物； 狠毒的女人； 爵士乐爱好者<br>
          vt.把（锚）吊放在锚架上；
          `
      }),
      new Dictionary({
        wordSpell: 'Cat',
        explain: `
          cat: 英 [kæt] 美 [kæt] <br>
          n.猫； 猫科动物； 狠毒的女人； 爵士乐爱好者<br>
          vt.把（锚）吊放在锚架上；
          `
      }),
      new Dictionary({
        wordSpell: 'Cat',
        explain: `
          cat: 英 [kæt] 美 [kæt] <br>
          n.猫； 猫科动物； 狠毒的女人； 爵士乐爱好者<br>
          vt.把（锚）吊放在锚架上；
          `
      }),
      new Dictionary({
        wordSpell: 'Cat',
        explain: `
          cat: 英 [kæt] 美 [kæt] <br>
          n.猫； 猫科动物； 狠毒的女人； 爵士乐爱好者<br>
          vt.把（锚）吊放在锚架上；
          `
      })
    ];
  }

}
