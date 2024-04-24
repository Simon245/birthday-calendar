import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Person } from 'src/app/models/person';

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
}
