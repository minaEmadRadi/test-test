export class DurationInGroupByMonth {
  month!: number;
  durationPerHours!: number;
  maxOut!: string;
  maxAttenanceHours!: number;
  firstTimeInPerMonth!: string;
  lastTimeInPerMonth!: string;
  nofAttendencePerMonth!: number;
  numberOfEffectiveDays!: number;
  nofAbsentsPerMonth!: number;
}

export class UserData {
  "Number Of Projects = ": number;
  "Number Of Attendences =": number;
  "Duaration in Group By Month =": DurationInGroupByMonth[];
}
