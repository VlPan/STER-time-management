import { Component } from '@angular/core';
import {Link } from 'src/models/navigation-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links: Link[] = [
    {
      name: 'Random',
      value: '/'
    },
    {
      name: 'Activities',
      value: '/activities'
    },
    {
      name: 'Activities History',
      value: '/history'
    },
  ];

}

