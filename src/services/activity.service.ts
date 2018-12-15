import { Injectable } from '@angular/core';
import { Activity } from './../models/activity';
import { LocalStorageService } from './localStorage.service';

import * as uuid from 'uuid/v4';


@Injectable({
  providedIn: 'root'
})

export class ActivityService {

  private activities: Activity[];


  constructor(private ls: LocalStorageService) {
    this.initActivities();
  }

  public getActivities() {
    return this.activities;
  }
  private initActivities() {
    return this.activities = this.ls.get('activities') || [];
  }



  public addActivity(activity: Activity) {
    const newActivity = {
      id: uuid(),
      ...activity
    };
    this.activities = [newActivity, ...this.activities];
    this.ls.set('activities', this.activities);
  }

  public deleteActivity(id: string) {
    this.activities = this.activities.filter((a) => id !== a.id);
    this.ls.set('activities', this.activities);
  }

  public editActivity(fields: Activity, id: string) {
    const index = this.activities.findIndex((a => a.id === id));

    this.activities[index] = {
      id,
      ...fields
    };

    console.log(this.activities);
    this.ls.set('activities', this.activities);
  }

  public getRandomActivity() {
    const min = 0;
    const max = this.activities.length;
    const rand = Math.floor(Math.random() * max) + min;

    return this.activities[rand];
  }



}
