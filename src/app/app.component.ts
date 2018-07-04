import {Component, OnInit} from '@angular/core';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';
import * as CryptoJS from 'crypto-js';

declare var wx: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'app';

  index = 1;

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    scrollbar: false,
    navigation: false,
    pagination: false
  };

  public slides = [
    {
      name: 'first style',
      imgUrl: './assets/images/slide1.jpg'
    }, {
      name: 'second style',
      imgUrl: './assets/images/slide2.jpg'
    },
    {
      name: 'first style',
      imgUrl: './assets/images/slide3.jpg'
    }, {
      name: 'second style',
      imgUrl: './assets/images/slide4.jpg'
    }
  ];

  ngOnInit(): void {
    const timestamp = new Date().getTime() / 1000;
    const nonceStr = 'whatthehell';
    const string1 = `noncestr=${nonceStr}&timestamp=${timestamp}`;
    // console.log('sha1: ', CryptoJS.SHA1(string1));
    const signature = CryptoJS.SHA1(string1);
    wx.config({
      debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: 'wx45c5430dac975c29', // 必填，公众号的唯一标识
      timestamp: timestamp, // 必填，生成签名的时间戳
      nonceStr: nonceStr, // 必填，生成签名的随机串
      signature: signature, // 必填，签名
      jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline', 'checkJsApi'] // 必填，需要使用的JS接口列表
    });

    wx.ready(function(){
      console.log('微信接口准备好了：');
      wx.checkJsApi({
        jsApiList: ['chooseImage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
        success: function(res) {
          // 以键值对的形式返回，可用的api值true，不可用为false
          // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
          console.log('chooseImage可以用：', res);
        }
      });
    });

    wx.error(function(res) {
      // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
      console.log('微信接口准备失败：', res);
    });
  }

}
