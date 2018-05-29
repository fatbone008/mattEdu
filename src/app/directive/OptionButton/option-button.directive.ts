import {AfterViewInit, Directive, ElementRef, Input, OnInit, Renderer, Renderer2} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Directive({
  selector: '[appOptionButton]'
})
export class OptionButtonDirective implements AfterViewInit, OnInit {

  // @Input() styleName: Observable<string> = Observable.of('');
  @Input('appOptionButton') styleOption;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {

  }

  ngOnInit() {
    console.log('it\'s true ', this.styleOption);
    if (this.styleOption === 'option') {
      this.renderer.setStyle(this.el.nativeElement, 'justifyContent', 'flex-start');
      this.renderer.setStyle(this.el.nativeElement, 'padding', '0 5%');
      this.renderer.setStyle(this.el.nativeElement, 'borderColor', '#c1d8ff');
      this.renderer.setStyle(this.el.nativeElement, 'fontWeigh', 'normal');
    }

  }

}
