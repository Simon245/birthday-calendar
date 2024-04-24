import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-birthdays',
  templateUrl: './birthdays.component.html',
  styleUrls: ['./birthdays.component.scss'],
})
export class BirthdaysComponent implements OnInit {
  people$: Person[] = [];
  constructor(private sessionService: SessionService) {}

  ngOnInit() {
    this.sessionService.getPeople().subscribe((people: Person[]) => {
      this.people$ = people;
    });
  }
}
