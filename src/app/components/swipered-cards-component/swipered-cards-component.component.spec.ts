import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperedCardsComponentComponent } from './swipered-cards-component.component';

describe('SwiperedCardsComponentComponent', () => {
  let component: SwiperedCardsComponentComponent;
  let fixture: ComponentFixture<SwiperedCardsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiperedCardsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperedCardsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
