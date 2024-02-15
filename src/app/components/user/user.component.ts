import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/models/User';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users: User[] = [];
  constructor(private userService: UserService ,private router: Router) { }
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
}
