import { Component, OnInit } from '@angular/core';
import { History, Activity } from './../../models/activity';
import { Formatter } from 'src/helpers/formatter';
import { HistoryService } from './../../services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private hs: HistoryService) { }

  uiHistory: {[key: string]: Activity[]};
  days: string[];

  ngOnInit() {
    this.uiHistory = this.hs.sortByDays(this.hs.getHistory());
    this.days = Object.keys(this.uiHistory);
  }

  format(number: number) {
    return Formatter.formatTimeNumber(number);
  }

}
