import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

import {FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';

function domainValidator(domain: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const email = control.value as string;

    if (email && email.endsWith(`@${domain}`)) {
      return null; // Validation passed
    }

    return { invalidDomain: true }; // Validation failed
  };
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  login() {
    const email = 'user@example.com'; // Replace with actual data
    const password = 'userpassword';  // Replace with actual data
  
    this.AuthService.login(email, password).subscribe({
      next: (response) => {
        // Handle the response, like navigating to another page or storing user data
      },
      error: (error) => {
        // Handle the error, like showing an error message
      }
    });
  }
  buttonPosition: string = 'center'; // Default position
  loginForm!: FormGroup;
  buttonX: number = 50; // Assuming container width is 100%
  buttonY: number = 50; // Assuming container height is 100%

  constructor(    private formBuilder: FormBuilder , private AuthService: AuthService
    ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [ Validators.email ,Validators.required]],
      password: ['', Validators.required]
    });
  }
  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched(); // Mark fields as touched to show validation errors
      return;
    }else{
      this.AuthService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
        next: (response) => {
          console.log(response);
          response.status == 200 ? window.location.href = '/home' : window.location.href = 'auth/login';
        }
      })
    }

 
  }


  handleMouseMove(event: MouseEvent) {
    const emailInvalid = this.loginForm.get('email')?.errors?.['email'] && this.loginForm.get('email');
    const passwordInvalid = this.loginForm.get('password')?.invalid && this.loginForm.get('password');
    if (emailInvalid || passwordInvalid) {
    const buttonElement = event.target as HTMLElement;
    const containerElement = buttonElement.parentElement;
    
    if (!containerElement) return;

    const containerRect = containerElement.getBoundingClientRect();

    // Calculate cursor position relative to the container
    const cursorX = event.clientX - containerRect.left;
    const cursorY = event.clientY - containerRect.top;

    // Increase the movement amount (you can adjust the multiplier)
    const movementMultiplier = 2; // Increase this value to increase movement amount

    this.buttonX = 50 + (50 - (cursorX / containerRect.width) * 100) * movementMultiplier;
    this.buttonY = 50 + (50 - (cursorY / containerRect.height) * 100) * movementMultiplier;

    // Constrain the button within the container
    this.buttonX = Math.max(0, Math.min(this.buttonX, 100));
    this.buttonY = Math.max(0, Math.min(this.buttonY, 100));
  }
  }
 
}
