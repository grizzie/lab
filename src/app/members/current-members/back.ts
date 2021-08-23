import { Component, OnInit } from '@angular/core';
import { NameListData } from 'src/app/const/name-list';
import { Namelist } from 'src/app/interfaces/namelist';

@Component({
  selector: 'app-current-members',
  templateUrl: './current-members.component.html',
  styleUrls: ['./current-members.component.css'],
})
export class CurrentMembersComponent implements OnInit {
  public proStudent;
  public proJobStudent;
  public masterStudent;
  public masterJobStudent;
  public bachelorStudent;
  public indexx;
  public students: Namelist[] = NameListData.current;
  public typeStudent: [
    'Phd-degree',
    'On-the-Job-Phd-degree',
    'Master-degree',
    'On-the-Job-Master-degree',
    'Bachelor-degree'
  ];
  constructor() {}
  ngOnInit() {
    this.indexx[0] = this.students.filter(
      (studentInfo) => studentInfo.study == this.typeStudent[0]
    );
    this.indexx[1] = this.students.filter(
      (studentInfo) => studentInfo.study == this.typeStudent[1]
    );
    this.indexx[2] = this.students.filter(
      (studentInfo) => studentInfo.study == this.typeStudent[2]
    );
    this.indexx[3] = this.students.filter(
      (studentInfo) => studentInfo.study == this.typeStudent[3]
    );
    this.indexx[4] = this.students.filter(
      (studentInfo) => studentInfo.study == this.typeStudent[4]
    );
  }
}
