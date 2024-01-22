import { Component } from '@angular/core';
import {
  FormControl,
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
  loginForm!: FormGroup;

  constructor() {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, domainValidator('dw')]),
      pass: new FormControl('', [Validators.required]),
    });
  }
}
