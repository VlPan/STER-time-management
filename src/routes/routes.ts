
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './../views/activities/activities.component';
import { RandomizePageComponent } from 'src/views/randomize-page/randomize-page.component';
import { HistoryComponent } from 'src/views/history/history.component';

export const appRoutes: Routes = [
  {
    path: 'activities',
    component: ActivitiesComponent,
  },
  {
    path: 'history',
    component: HistoryComponent,
  },
  { path: '',
    component: RandomizePageComponent,
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];
