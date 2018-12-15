import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './../../components/card/card.component';
import { ActivitiesComponent } from '../activities/activities.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/routes/routes';
import { RandomizePageComponent } from '../randomize-page/randomize-page.component';
import { ActivityService } from './../../services/activity.service';
import { FormsModule } from '@angular/forms';
import { CountdownModule } from 'ngx-countdown';
import { HistoryComponent } from './../history/history.component';
import { NavigationComponent } from 'src/components/navigation/navigation.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { ActivityFormComponent } from 'src/components/activity-form/activity-form.component';
import { ActivitySetComponent } from './../../components/activity-set/activity-set.component';
import { ActivityRowComponent } from './../../components/activity-row/activity-row.component';
import { TimerService } from './../../services/timer.service';
import { RunningActivityService } from './../../services/running-activity.service';
import { HistoryService } from './../../services/history.service';



@NgModule({
   declarations: [
      AppComponent,
      CardComponent,
      ActivitiesComponent,
      RandomizePageComponent,
      HistoryComponent,
      NavigationComponent,
      ActivityFormComponent,
      ActivitySetComponent,
      ActivityRowComponent
   ],
   imports: [
FormsModule,
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      CountdownModule,
      BrowserAnimationsModule,
      InputTextModule,
      ButtonModule,
   ],
   providers: [
      ActivityService,
      TimerService,
      RunningActivityService,
      HistoryService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
