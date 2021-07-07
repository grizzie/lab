import { Component, OnInit } from '@angular/core';
import namelist from 'C:\\Users\\User.DESKTOP-NA2F2N8\\projects\\angular\\labb\\src\\app\\_files\\former-members-namelist.json';

@Component({
  selector: 'app-former-members',
  templateUrl: './former-members.component.html',
  styleUrls: ['./former-members.component.css']
})
export class FormerMembersComponent implements OnInit {
  public students:{name:string, male:boolean, title:string, study:string, uni:string, year:number}[] = namelist;
  // public students:{name:string, male:boolean, title:string, study:string, uni:string, year: string}[] = namelist;
  public yearr=[99, 100, 101, 102,103, 104];
  public indexx;
  constructor() { }

  ngOnInit() {

    this.indexx[0] = this.students.filter((studentInfo)=>studentInfo.year==this.yearr[0]);
    this.indexx[1] = this.students.filter((studentInfo)=>studentInfo.year==this.yearr[1]);
    this.indexx[2] = this.students.filter((studentInfo)=>studentInfo.year==this.yearr[2]);
    this.indexx[3] = this.students.filter((studentInfo)=>studentInfo.year==this.yearr[3]);
    this.indexx[4] = this.students.filter((studentInfo)=>studentInfo.year==this.yearr[4]);
  }

}

