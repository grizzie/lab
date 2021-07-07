import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorComponent } from './professor/professor.component';
import { MembersComponent } from './members/members.component';
import { AboutComponent } from './about/about.component';
import {CarouselPauseComponent } from './carousel-pause/carousel-pause.component';
import { CurrentMembersComponent } from './members/current-members/current-members.component';
import { FormerMembersComponent } from './members/former-members/former-members.component';
const routes: Routes = [
  { path: 'home',component: CarouselPauseComponent},
  { path: 'professor',component: ProfessorComponent},
  { path: 'about',component: AboutComponent},
  { path: 'members',component: MembersComponent},
  { path: 'members/current-members',component: CurrentMembersComponent},
  { path: 'members/former-members',component: FormerMembersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
