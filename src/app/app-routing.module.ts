import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LiniiComponent } from './linii/linii.component';
import { StaniciComponent } from './stanici/stanici.component';
import { BiletiComponent } from './bileti/bileti.component';
import { LinijaDetailsComponent } from './linija-details/linija-details.component';
import { StanicaDetailsComponent } from './stanica-details/stanica-details.component';
import { KontaktComponent } from "./kontakt/kontakt.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:broj', component: LinijaDetailsComponent },
  { path: 'Sdetail/:broj', component: StanicaDetailsComponent },
  { path: 'linii', component: LiniiComponent },
  { path: 'stanici', component: StaniciComponent },
  { path: 'bileti', component: BiletiComponent },
  { path: 'kontakt', component: KontaktComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
