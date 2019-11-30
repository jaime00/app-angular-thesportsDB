import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'team-component',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  @Input()team: any
  constructor() { }

  ngOnInit() {
  }

}
