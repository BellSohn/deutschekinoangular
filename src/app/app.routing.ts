//import modules from Angular router
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import componentes
import { HomeComponent} from './home/home.component';
import { FilmeComponent} from './filme/filme.component';
import { RegiComponent} from './regi/regi.component';
import { ActorComponent } from './actor/actor.component';
import { ActresComponent } from './actres/actres.component'


//routes array
const appRoutes:Routes = [
{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'filme',component:FilmeComponent},
{path:'regi',component:RegiComponent},
{path:'actor',component:ActorComponent},
{path:'actres',component:ActresComponent},
{path:'**',component:HomeComponent}
];


//export router module
export const AppRoutingProviders:any[]= [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
