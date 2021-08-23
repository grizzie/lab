import { Component, OnInit } from '@angular/core';
import { Namelist } from 'src/app/interfaces/namelist';
import { NameListData } from 'src/app/const/name-list';

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

  public students: Namelist[] = NameListData.current;
  constructor() {}
  ngOnInit() {
    this.proStudent = this.students.filter(
      (studentInfo) => studentInfo.study == 'Phd-degree'
    );
    this.proJobStudent = this.students.filter(
      (studentInfo) => studentInfo.study == 'On-the-Job-Phd-degree'
    );
    this.masterStudent = this.students.filter(
      (studentInfo) => studentInfo.study == 'Master-degree'
    );
    this.masterJobStudent = this.students.filter(
      (studentInfo) => studentInfo.study == 'On-the-Job-Master-degree'
    );
    this.bachelorStudent = this.students.filter(
      (studentInfo) => studentInfo.study == 'Bachelor-degree'
    );
  }
}
