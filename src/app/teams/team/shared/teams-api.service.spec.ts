import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TeamsApiService {
  PUBLIC_KEY = '';
  HASH = '';
  URL_API = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';

  constructor(private http: HttpClient) { }

  getAllTeams(): Observable<any> {
    return this.http.get<any>(this.URL_API)
      .pipe(map((data: any) => data.teams))
  }



}

