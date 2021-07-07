import { Component, OnInit } from '@angular/core';
import namelist from 'C:\\Users\\User.DESKTOP-NA2F2N8\\projects\\angular\\labb\\src\\app\\_files\\former-members-namelist.json';

@Component({
  selector: 'app-former-members',
  templateUrl: './former-members.component.html',
  styleUrls: ['./former-members.component.css']
})
export class FormerMembersComponent implements OnInit {
  public students:{name:string, male:boolean, title:string, study:string,uni:string}[] = namelist;

  constructor() { }

  ngOnInit(): void {
  }

}
