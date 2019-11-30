import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { TeamsApiService } from "../teams/team/shared/teams-api.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  team = [];
  ;

  constructor(
    private TeamsApiService: TeamsApiService,
    private ActivatedRoute: ActivatedRoute
    ) {
    // this.route.params.subscribe(params => {      
    //   this.team = (this._service.getTeam(params.id))
    // })
  }

  

  ngOnInit()  {
    this.getTeam(this.ActivatedRoute.snapshot.params['id']);
    // this.getTeam(ActivatedRoute.params['id']);
  }

  getTeam(id){
    this.TeamsApiService.getTeam(id).subscribe(data => {
      this.team = data['teams'];
      console.log(this.team);
    })
  }


}
