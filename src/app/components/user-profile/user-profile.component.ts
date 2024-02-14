import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  userId: number | null = null;
  user!: User;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.userId = +params.get('id')!; // The '+' operator converts the string to a number
      // Fetch user data based on this.userId or perform other logic
    });
    if (this.userId) {
      this.getUserById(this.userId);
    }
  }

  getUserById(userId: number) {
    this.userService.getUserById(userId).subscribe((data) => {
      console.log(data);
      this.user = data;
    });
  }

  attendance() {
    if (true) {
      // future condition
      this.showSuccess('Data Submitted successfully');
    } else {
      this.showError('there is an error occurred');
    }
  }

  showSuccess(message: string) {
    this.messageService.add({
      severity: 'success',
      summary: message,
      detail: 'The operation has been successfully completed.',
      life: 2000,
      
    });
  }

  showError(error: string) {
    this.messageService.add({
      severity: 'error',
      summary: error,
      detail:
        "The operation couldn't proceed further. Please, try again later or contact support for assistance.",
      life: 2000,
    });
  }
}
