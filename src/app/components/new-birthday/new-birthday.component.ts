import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as dayjs from 'dayjs';
import { Person } from 'src/app/models/person';
import { SessionService } from 'src/app/services/session.service';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

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
  validDate = true;
  constructor(
    private fb: FormBuilder,
    private sessionService: SessionService,
  ) {
    this.newPersonForm = this.fb.group({
      firstName: [{ value: null, disabled: false }, Validators.required],
      lastName: [{ value: null, disabled: false }],
      day: [{ value: dayjs().date(), disabled: false }, Validators.required],
      month: [
        { value: dayjs().month() + 1, disabled: false },
        Validators.required,
      ],
      year: [{ value: null, disabled: false }],
    });
  }

  ngOnInit() {
    let currentYear = dayjs().year();
    for (let i = 0; i < 101; i++) {
      this.years.push(currentYear);
      currentYear--;
    }

    this.newPersonForm.valueChanges.subscribe((form) => {
      this.validDate = dayjs(
        `${form.year ? form.year : dayjs().year()}-${form.month}-${form.day}`,
        'YYYY-M-D',
        true,
      ).isValid();
    });
  }

  handleFormSubmit(formValues: any): void {
    const person: Person = {
      firstname: formValues.firstName,
      lastname: formValues.lastName,
      day: formValues.day,
      month: formValues.month,
      year: formValues.year ? formValues.year : null,
    };
    this.sessionService.setPeople(person);
  }
}
