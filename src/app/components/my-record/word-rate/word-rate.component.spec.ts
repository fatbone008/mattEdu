import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordRateComponent } from './word-rate.component';

describe('WordRateComponent', () => {
  let component: WordRateComponent;
  let fixture: ComponentFixture<WordRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
