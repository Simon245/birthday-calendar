import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from '../../app/models/person';
import dayjs from 'dayjs';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  people$: BehaviorSubject<Person[]> = new BehaviorSubject<Person[]>([]);
  constructor() {
    const testData: Person[] = [
      {
        firstname: 'Simon',
        lastname: 'Ball',
        day: 9,
        month: 1,
        year: 1986,
      },
      {
        firstname: 'John',
        day: 1,
        month: 5,
      },
      {
        firstname: 'Sam',
        lastname: 'Smith',
        day: dayjs().date(),
        month: dayjs().add(1, 'month').month(),
      },
    ];
    this.people$.next(testData);
  }
  getPeople(): Observable<Person[]> {
    return this.people$;
  }

  setPeople(person: Person): void {
    const people = this.people$.getValue();
    people.push(person);
    this.people$.next(people);
  }

  clearMockData() {
    this.people$.next([]);
  }
}
