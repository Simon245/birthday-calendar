import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBirthdayComponent } from './new-birthday.component';

describe('NewBirthdayComponent', () => {
  let component: NewBirthdayComponent;
  let fixture: ComponentFixture<NewBirthdayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewBirthdayComponent],
    });
    fixture = TestBed.createComponent(NewBirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
