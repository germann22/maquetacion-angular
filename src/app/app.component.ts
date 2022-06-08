import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  items: string[] = ['Lorem 1', 'Lorem 2', 'Lorem 3', 'Lorem 4'];
  expandedIndex = 0;
  title = 'angular-maquetacion';

  ngOnInit(): void {
    AOS.init();

  }

}
