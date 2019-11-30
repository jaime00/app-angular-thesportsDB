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
  URL_APIxTEAM = 'https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?'
  URL_APIxPLAYER = "https://www.thesportsdb.com/api/v1/json/1/lookup_all_players.php?"
  constructor(private http: HttpClient) { }

  getAllTeams() {
    return this.http.get<any>(this.URL_API)
      .pipe(map((data: any) => {
        return data.teams
      }))
  }
  getAllPlayers(id) {
    return this.http.get(`${this.URL_APIxPLAYER}id=${id}`)
  }

  getTeam(id) {
    return this.http.get(`${this.URL_APIxTEAM}id=${id}`)
  }
}

