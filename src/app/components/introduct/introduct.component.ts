import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import shave from 'shave'
import {Router} from '@angular/router';

@Component({
  selector: 'app-introduct',
  templateUrl: './introduct.component.html',
  styleUrls: ['./introduct.component.css']
})
export class IntroductComponent implements OnInit, AfterViewInit {

  introduceTitle = 'WAR HOUSE';
  introduce = `
  影片《战马》改编自英国桂冠作家
  麦克·莫波格的同名小说，由史蒂文
  ·斯皮尔伯格执导，杰瑞米·艾文、
  彼得·穆兰、艾米丽·沃森等联袂主演
  。影片于2011年12月25日在美国上映
  。影片以一匹名叫乔伊的农场马的视角展开
  ，1914年第一次世界大战爆发，一个英国农
  场少年艾伯特的父亲为了维持农场，无奈之下
  将乔伊卖给军队，为前线运送军火物资。艾伯特
  和他心爱的马不得不分离，但他们被分离的命运又因为第一次世界大战又重新交织在一起的故事。`;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    shave('.intro', 200, {character: `... <a style="color:blue;">显示全文</a>`});
  }

  routeToNext(): void {
    this.router.navigate(['/audio']);
  }
}
