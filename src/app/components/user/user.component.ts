import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/models/User';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  onDelete(id: number, event: any) {
    event.stopPropagation(); // Prevent the row click event from firing
    this.userService.deleteUser(id).subscribe({
      next: (success) => {
        if (success) {
          this.showSuccess('Deleted successfully.');
          this.users = this.users.filter((user) => user.id !== id);
        } else {
          this.showError('Deletion was unsuccessful.');
        }
      },
      error: (error) => {
        this.showError('Failed to delete.');
        console.error('Deletion error:', error);
      }
    });
  }
  
  users: User[] = [];
  constructor(private userService: UserService ,private router: Router,    private messageService: MessageService    ) { }
  ngOnInit(): void {
    this.userService.GetAllUsers().subscribe({
      next: (response: HttpResponse<User[]>) => {
        if (response.body !== null) {
          this.users = response.body;
        }      },
      error: (error) => {
        console.error('Error fetching users:', error);
        // Additional error handling logic here
      }
    });
    }
  onUserClick(user:User) {
    console.log(user.id)
    // console.log(value);
     this.router.navigate(['/user-profile', user.id]);
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
