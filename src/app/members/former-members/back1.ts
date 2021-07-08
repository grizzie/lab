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
  public y99;
  public y100;
  public y101;
  public y102;
  public y103;
  public y104;
  constructor() { }

  ngOnInit() {
    this.y99 = this.students.filter((studentInfo)=>studentInfo.year==99);
    this.y100 = this.students.filter((studentInfo)=>studentInfo.year==100);
    this.y101 = this.students.filter((studentInfo)=>studentInfo.year==101);
    this.y102 = this.students.filter((studentInfo)=>studentInfo.year==102);
    this.y103 = this.students.filter((studentInfo)=>studentInfo.year==103);
    this.y104 = this.students.filter((studentInfo)=>studentInfo.year==104);
  }

}

