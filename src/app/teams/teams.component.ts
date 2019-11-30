import { Component, OnInit } from '@angular/core';
import { TeamsApiService } from "./team/shared/teams-api.service";
import { Observable } from "rxjs";

@Component({
  selector: 'teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(private teamsSvc: TeamsApiService) { }
  allTeams : Observable<any>;

  ngOnInit() {
    this.getTeams();
  }

  getTeams(){
    this.allTeams = this.teamsSvc.getAllTeams();
  }
}
