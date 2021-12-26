import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { New } from 'src/app/core/models/new.model';
import { NewsProviderService } from 'src/app/core/providers/news-provider.service';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css']
})
export class AllNewsComponent implements OnInit {

  public news$: Observable <New[]>;
  public newsArray: any | null;

  constructor(private newsProviderService: NewsProviderService) { 
    this.newsArray = [];
    this.news$ = new Observable <New[]>();
  }

  ngOnInit(): void {
    this.getNews();
  }


  getNews () {
    this.newsProviderService.getNews('1', 'angular').subscribe ((news) => {
      this.newsArray = news.hits;
    })
  }

}
