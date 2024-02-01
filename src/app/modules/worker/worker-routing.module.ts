import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from 'src/app/components/auth/auth.component';
import { HomePageComponent } from 'src/app/components/home-page/home-page.component';
import { LoginComponent } from 'src/app/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component:HomePageComponent
  },
  {
    path: 'login',
    redirectTo: 'auth/login', // Redirect to 'auth/login' when the path is empty
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent }
      // { path: 'register', component: RegisterComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkerRoutingModule {}
