import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { New } from '../models/new.model';
import { HttpService } from '../services/http.service';


@Injectable({
  providedIn: 'root'
})
export class NewsProviderService {

  constructor(private httpService: HttpService) { }

  public getNews(page: string, type: string): Observable<any> {
    return this.httpService.get<any>('/search_by_date?query=' + type + '&page=' + page + '&hitsPerPage=8');
  }
}
