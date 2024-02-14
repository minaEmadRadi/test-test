import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkerModule } from './modules/worker/worker.module';
import { AuthComponent } from './components/auth/auth.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UserComponent } from './components/user/user.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  declarations: [AppComponent, AuthComponent, NavbarComponent, FooterComponent, HomePageComponent, UserComponent, UserProfileComponent],
  imports: [BrowserModule, AppRoutingModule, WorkerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
