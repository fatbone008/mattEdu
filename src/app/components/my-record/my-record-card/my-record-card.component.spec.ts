import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRecordCardComponent } from './my-record-card.component';

describe('MyRecordCardComponent', () => {
  let component: MyRecordCardComponent;
  let fixture: ComponentFixture<MyRecordCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRecordCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRecordCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
