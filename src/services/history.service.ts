import { Injectable } from '@angular/core';
import { Activity, History } from './../models/activity';
import * as uuid from 'uuid/v4';
import { LocalStorageService } from './localStorage.service';
import { Formatter } from 'src/helpers/formatter';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private history: History[];

  constructor(private ls: LocalStorageService) {
    this.initHistory();
  }

  private initHistory() {
    return this.history = this.ls.get('history') || [];
  }

  public setHistory(history: History) {
    history.id = uuid();
    this.history = [history, ...this.history];
    this.ls.set('history', this.history);
  }

  public getHistory(): History[] {
    this.initHistory();
    return this.history;
  }

  sortByDays(history: History[]) {

    let dates = history.reverse().map(h => `
      ${this.format(new Date(h.date).getDate())}
      .${this.format(new Date(h.date).getMonth() + 1)}
      .${new Date(h.date).getFullYear()}`
    );
    dates = dates.filter((item, index, self) => self.indexOf(item) === index);
    const res = {};
    history.map(h => {
      const activityDate =  `
      ${this.format(new Date(h.date).getDate())}
      .${this.format(new Date(h.date).getMonth() + 1)}
      .${new Date(h.date).getFullYear()}`;
      if (dates.indexOf(activityDate) >= 0) {
        res[activityDate] = res[activityDate] || [];
        res[activityDate] = res[activityDate].concat(h);
      }
    });
    return res;
  }


  format(number: number) {
    return Formatter.formatTimeNumber(number);
  }


}
