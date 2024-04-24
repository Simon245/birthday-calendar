import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-new-birthday',
  templateUrl: './new-birthday.component.html',
  styleUrls: ['./new-birthday.component.scss'],
})
export class NewBirthdayComponent implements OnInit {
  newPersonForm: FormGroup;
  days: number[] = [...Array(31).keys()].map((x: number) => x + 1);
  months: number[] = [...Array(12).keys()].map((x: number) => x + 1);
  years: number[] = [];
  constructor(private fb: FormBuilder) {
    this.newPersonForm = this.fb.group({
      firstName: [{ value: null, disabled: false }, Validators.required],
      lastName: [{ value: null, disabled: false }],
      day: [{ value: 1, disabled: false }, Validators.required],
      month: [{ value: 1, disabled: false }, Validators.required],
      year: [{ value: dayjs().year(), disabled: false }, Validators.required],
    });
  }

  ngOnInit() {
    let currentYear = dayjs().year();
    for (let i = 0; i < 101; i++) {
      this.years.push(currentYear);
      currentYear--;
    }
  }

  handleFormSubmit(): void {
    // todo handle form
  }
}
