import { Injectable } from '@angular/core';
import { Activity } from './../models/activity';

@Injectable({
  providedIn: 'root'
})
export class RunningActivityService {

  private currentActivity: Activity;
  constructor() { }

  setCurrentActivity(activity: Activity) {
    this.currentActivity = activity;
  }

  getCurrentActivity(): Activity {
    return this.currentActivity;
  }

}
