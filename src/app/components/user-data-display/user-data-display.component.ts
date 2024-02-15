import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserData } from 'src/app/models/UserData';


@Component({
  selector: 'app-user-data-display',
  templateUrl: './user-data-display.component.html',
  styleUrls: ['./user-data-display.component.css']
})
export class UserDataDisplayComponent implements OnInit {
  @Input() user!: User;

  userData: UserData = {
    "Number Of Projects = ": 3,
    "Number Of Attendences =": 1,
    "Duaration in Group By Month =": [
      {
        month: 2,
        durationPerHours: -12,
        maxOut: "1/1/0001",
        maxAttenanceHours: -12,
        firstTimeInPerMonth: "2/15/2024",
        lastTimeInPerMonth: "2/15/2024",
        nofAttendencePerMonth: 1,
        numberOfEffectiveDays: 21,
        nofAbsentsPerMonth: 20
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }
}
