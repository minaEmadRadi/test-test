import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-card-profile',
  templateUrl: './user-card-profile.component.html',
  styleUrls: ['./user-card-profile.component.css']
})
export class UserCardProfileComponent {
  @Input() user!: User;

  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) {}

  leave() {
    this.userService.leave(this.user.id).subscribe({
      next: (success) => {
        if (success) {
          this.showSuccess('Left successfully.');
        } else {
          this.showError('Failed to leave.');
        }
      },
      error: () => {
        this.showError('Failed to mark leave.');
      },
    });
  }

  attend() {
    this.userService.attend(this.user.id).subscribe({
      next: (success) => {
        if (success) {
          this.showSuccess('Attendance marked successfully.');
        } else {
          this.showError('Failed to mark attendance.');
        }
      },
      error: () => {
        this.showError(`Failed to mark attendance.`);
      },
    });
  }

  showSuccess(message: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: message,
      life: 3000,
    });
  }

  showError(message: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message,
      life: 3000,
    });
  }
}
