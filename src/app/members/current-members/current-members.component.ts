import { Component, OnInit } from '@angular/core';
import namelist from 'C:\\Users\\User.DESKTOP-NA2F2N8\\projects\\angular\\labb\\src\\app\\_files\\current-members-namelist.json';
@Component({
  selector: 'app-current-members',
  templateUrl: './current-members.component.html',
  styleUrls: ['./current-members.component.css']
})
export class CurrentMembersComponent implements OnInit {

  public students:{name:string, male:boolean, field:string, study:string}[] = namelist;
  constructor() {
  }
  ngOnInit(): void {
  }

}
