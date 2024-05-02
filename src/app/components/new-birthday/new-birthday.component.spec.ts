import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { NewBirthdayComponent } from './new-birthday.component';

describe('NewBirthdayComponent', () => {
  let comp: NewBirthdayComponent;
  let fixture: ComponentFixture<NewBirthdayComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [NewBirthdayComponent],
    });
    fixture = TestBed.createComponent(NewBirthdayComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('should have 31 days', () => {
    const days: number[] = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ];
    expect(comp.days.length).toEqual(31);
    expect(comp.days).toEqual(days);
  });

  it('should have 12 months', () => {
    const months: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    expect(comp.months.length).toEqual(12);
    expect(comp.months).toEqual(months);
  });

  it('should have a disabled submit button', () => {
    spyOn(comp, 'handleFormSubmit');
    const btn = fixture.debugElement.query(By.css('button')).nativeElement;
    comp.newPersonForm.controls['firstName'].setValue('');
    comp.newPersonForm.controls['day'].setValue(1);
    comp.newPersonForm.controls['month'].setValue(1);
    fixture.detectChanges();
    btn.click();
    expect(btn.disabled).toBeTruthy();
    expect(comp.handleFormSubmit).toHaveBeenCalledTimes(0);
  });

  it('should have an enabled submit button', () => {
    spyOn(comp, 'handleFormSubmit');
    const btn = fixture.debugElement.query(By.css('button')).nativeElement;
    comp.newPersonForm.controls['firstName'].setValue('first');
    comp.newPersonForm.controls['day'].setValue(1);
    comp.newPersonForm.controls['month'].setValue(1);
    fixture.detectChanges();
    btn.click();
    expect(btn.disabled).toBeFalsy();
    expect(comp.handleFormSubmit).toHaveBeenCalledTimes(1);
  });

  it('should have an invalid date', () => {
    expect(comp.validDate).toBeTruthy();
    spyOn(comp, 'handleFormSubmit');
    const btn = fixture.debugElement.query(By.css('button')).nativeElement;
    comp.newPersonForm.controls['day'].setValue(30);
    comp.newPersonForm.controls['month'].setValue(2);
    fixture.detectChanges();
    btn.click();
    expect(comp.validDate).toBeFalsy();
    expect(comp.handleFormSubmit).toHaveBeenCalledTimes(0);
  });
});
