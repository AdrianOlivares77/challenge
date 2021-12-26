import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl: string;

  constructor(
    private httpClient: HttpClient
  )
  {
    this.baseUrl = 'http://hn.algolia.com/api/v1/';
  }

  public get <type>(path: string): Observable<type>{
    return this.httpClient.get<type>(this.baseUrl + path)
      .pipe(map((data:any) => data as type));
  }
}
