import { Component } from '@angular/core';
import { news } from "../../assets/json/news";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dataNews = news;

  constructor() {
    
  }

}
