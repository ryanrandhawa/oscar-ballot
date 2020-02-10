import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypicksComponent } from './mypicks.component';

describe('MypicksComponent', () => {
  let component: MypicksComponent;
  let fixture: ComponentFixture<MypicksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypicksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
