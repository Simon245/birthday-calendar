import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdaysComponent } from './birthdays.component';
import dayjs from 'dayjs';
import objectSupport from 'dayjs/plugin/objectSupport';
dayjs.extend(objectSupport);

describe('BirthdaysComponent', () => {
  let component: BirthdaysComponent;
  let fixture: ComponentFixture<BirthdaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [BirthdaysComponent],
    });
    fixture = TestBed.createComponent(BirthdaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
