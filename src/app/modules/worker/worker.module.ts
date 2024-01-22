import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkerRoutingModule } from './worker-routing.module';
import { LoginComponent } from 'src/app/components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    WorkerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class WorkerModule { }
