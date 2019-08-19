import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NAVComponent implements OnInit {
appTitle:string='MyApp';
  constructor() { }

  ngOnInit() {
  }

}
