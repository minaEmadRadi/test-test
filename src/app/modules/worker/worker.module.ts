import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { WorkerRoutingModule } from './worker-routing.module';
import { LoginComponent } from 'src/app/components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HomePageComponent } from 'src/app/components/home-page/home-page.component';
import { UserComponent } from 'src/app/components/user/user.component';

@NgModule({
  declarations: [LoginComponent, HomePageComponent, UserComponent],
  imports: [
    HttpClientModule,
    ButtonModule,
    CommonModule,
    WorkerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class WorkerModule {}
