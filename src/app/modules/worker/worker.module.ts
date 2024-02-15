import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { WorkerRoutingModule } from './worker-routing.module';
import { LoginComponent } from 'src/app/components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HomePageComponent } from 'src/app/components/home-page/home-page.component';
import { UserComponent } from 'src/app/components/user/user.component';
import { CardModule } from 'primeng/card';
import { UserProfileComponent } from 'src/app/components/user-profile/user-profile.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { UserCardProfileComponent } from '../../components/user-card-profile/user-card-profile.component';
import { UserDataDisplayComponent } from '../../components/user-data-display/user-data-display.component';



@NgModule({
  declarations: [
    LoginComponent,
    HomePageComponent,
    UserComponent,
    UserProfileComponent,
    UserCardProfileComponent,
    UserDataDisplayComponent,
  ],
  imports: [
    HttpClientModule,
    ButtonModule,
    CommonModule,
    WorkerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    ToastModule,
    TableModule,
  ],
  providers: [MessageService],
})
export class WorkerModule {}
