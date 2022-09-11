import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SpecialityComponent } from './speciality/speciality.component';
import { NRIComponent } from './nri/nri.component';
import { UNVComponent } from './unv/unv.component';
import { ZoneComponent } from './zone/zone.component';
import { BaliseComponent } from './balise/balise.component';
import { RomainComponent } from './romain/romain.component';
import { UserComponent } from './user/user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdatenriComponent } from './updatenri/updatenri.component';
import { UpdateunvComponent } from './updateunv/updateunv.component';
import { AddunvlieesComponent } from './addunvliees/addunvliees.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpecialityComponent,
    NRIComponent,
    UNVComponent,
    ZoneComponent,
    BaliseComponent,
    RomainComponent,
    UserComponent,
    UpdateUserComponent,
    UpdatenriComponent,
    UpdateunvComponent,
    AddunvlieesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
