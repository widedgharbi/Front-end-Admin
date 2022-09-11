import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddunvlieesComponent } from './addunvliees/addunvliees.component';
import { BaliseComponent } from './balise/balise.component';
import { HomeComponent } from './home/home.component';
import { NRIComponent } from './nri/nri.component';
import { RomainComponent } from './romain/romain.component';
import { SpecialityComponent } from './speciality/speciality.component';
import { UNVComponent } from './unv/unv.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdatenriComponent } from './updatenri/updatenri.component';
import { UpdateunvComponent } from './updateunv/updateunv.component';
import { UserComponent } from './user/user.component';
import { ZoneComponent } from './zone/zone.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'balise', component: BaliseComponent },
  { path: 'speciality', component: SpecialityComponent },
  { path: 'nri', component: NRIComponent },
  { path: 'unv', component: UNVComponent },
  { path: 'zone', component: ZoneComponent },
  { path: 'romain', component: RomainComponent },
  { path: 'user', component: UserComponent },
  { path: 'updateuser', component: UpdateUserComponent },
  { path: 'updatenri', component: UpdatenriComponent },
  { path: 'updateunv', component: UpdateunvComponent },
  { path: 'addunvliees', component: AddunvlieesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
