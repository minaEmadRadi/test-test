import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkerModule } from './modules/worker/worker.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, WorkerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
