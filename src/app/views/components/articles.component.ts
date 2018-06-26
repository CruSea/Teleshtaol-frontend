import { Component, OnInit } from '@angular/core';
import {Article} from "./article.interface";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: Article[];

  constructor() { }

  ngOnInit() {
  }

}
