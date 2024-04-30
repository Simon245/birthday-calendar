import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { NewBirthdayComponent } from './new-birthday.component';

describe('NewBirthdayComponent', () => {
  let component: NewBirthdayComponent;
  let fixture: ComponentFixture<NewBirthdayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
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
