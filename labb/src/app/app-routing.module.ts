import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProfessorComponent } from './professor/professor.component';
import { MembersComponent } from './members/members.component';

const routes: Routes = [
  { path: 'home',component: AboutusComponent},
  { path: 'services',component: AboutusComponent},
  { path: 'professor',component: ProfessorComponent},
  { path: 'aboutus',component: AboutusComponent},
  { path: 'members',component: MembersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
