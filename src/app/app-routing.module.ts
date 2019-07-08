import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChallengesComponent } from './challenges/challenges.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChampionsboardComponent } from './championsboard/championsboard.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
{path:"dash", component:DashboardComponent},
{path:"champ", component:ChampionsboardComponent},
{path:"contact", component:ContactComponent},
{path:"challenges", component:ChallengesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
