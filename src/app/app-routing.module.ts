import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorComponent } from './professor/professor.component';
import { MembersComponent } from './members/members.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  { path: 'professor',component: ProfessorComponent},
  { path: 'about',component: AboutComponent},
  { path: 'members',component: MembersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
