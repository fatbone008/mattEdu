import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperedBooksComponentComponent } from './swipered-books-component.component';

describe('SwiperedBooksComponentComponent', () => {
  let component: SwiperedBooksComponentComponent;
  let fixture: ComponentFixture<SwiperedBooksComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiperedBooksComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperedBooksComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
