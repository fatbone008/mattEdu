import {AfterViewInit, Directive, ElementRef, HostListener, Input, OnInit, Renderer, Renderer2} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Directive({
  selector: '[appOptionButton]'
})
export class OptionButtonDirective implements AfterViewInit, OnInit {

  // @Input() styleName: Observable<string> = Observable.of('');
  _styleOption;

  get styleOption() {
    return this._styleOption;
  }

  @Input('appOptionButton')
  set styleOption(style) {
    this._styleOption = style;
    this.changeStyle(style);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {

  }

  ngOnInit() {
    console.log('it\'s true ', this._styleOption);
  }

  // 根据StyleOption的值修改样式
  private changeStyle(style) {
    if (this.styleOption) {
      this.renderer.addClass(this.el.nativeElement, style);
    }
  }
}
