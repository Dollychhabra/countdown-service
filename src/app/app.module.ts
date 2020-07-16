import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonModule } from './atoms/button/button.module';
import { CountdownTimerSubjectModule } from './organisms/countdown-timer-subject/countdown-timer-subject.module';
import { CountdownTimerSubjectComponent } from './organisms/countdown-timer-subject/countdown-timer-subject.component';

import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: CountdownTimerSubjectComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ButtonModule,
    CountdownTimerSubjectModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
