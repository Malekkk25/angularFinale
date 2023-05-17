import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VolsComponent } from './vols/vols.component';
import { AddVolComponent } from './add-vol/add-vol.component';
import { UpdateVolComponent } from './update-vol/update-vol.component';
import { RechercheParAeroportComponent } from './recherche-par-aeroport/recherche-par-aeroport.component';
import { RechercheParDestinationComponent } from './recherche-par-destination/recherche-par-destination.component';
import { ListeAeroportsComponent } from './liste-aeroports/liste-aeroports.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: "vols", component : VolsComponent},
  {path: "add-vol", component : AddVolComponent},
  {path: "add-produit", component : AddVolComponent},
  { path: "", redirectTo: "vols", pathMatch: "full" },
  { path:"updateVol/:id", component: UpdateVolComponent},
  {path: "rechercheParAeroport", component : RechercheParAeroportComponent},
  {path: "rechercheParDestination", component : RechercheParDestinationComponent},
  {path: "listeAeroports", component : ListeAeroportsComponent},
  {path: 'login', component: LoginComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
