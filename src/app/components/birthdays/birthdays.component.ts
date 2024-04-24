import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { SessionService } from 'src/app/services/session.service';
import * as dayjs from 'dayjs';
import * as objectSupport from 'dayjs/plugin/objectSupport';
dayjs.extend(objectSupport);

@Component({
  selector: 'app-birthdays',
  templateUrl: './birthdays.component.html',
  styleUrls: ['./birthdays.component.scss'],
})
export class BirthdaysComponent implements OnInit {
  people: Person[] = [];
  today = dayjs().startOf('day');
  constructor(private sessionService: SessionService) {}

  ngOnInit() {
    this.sessionService.getPeople().subscribe((people: Person[]) => {
      this.people = people;
    });
  }

  getFromNow(person: Person): number {
    const birthday = dayjs({
      y: dayjs().year(),
      M: person.month,
      d: person.day,
    });

    const nextBirthday = dayjs({
      y:
        birthday.diff(this.today) > 0
          ? dayjs().format('YYYY')
          : dayjs().add(1, 'year').format('YYYY'),
      M: person.month,
      d: person.day,
    });

    return nextBirthday.diff(this.today, 'day');
  }

  getAge(person: Person): number {
    const birthday = dayjs({
      y: person.year,
      M: person.month,
      d: person.day,
    });

    return this.today.diff(birthday, 'years');
  }
}
