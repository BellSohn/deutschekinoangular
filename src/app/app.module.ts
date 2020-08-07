import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, AppRoutingProviders } from './app.routing';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FilmeComponent } from './filme/filme.component';
import { RegiComponent } from './regi/regi.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ActorComponent } from './actor/actor.component';
import { ActresComponent } from './actres/actres.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmeComponent,
    RegiComponent,
    HeaderComponent,
    FooterComponent,
    ActorComponent,
    ActresComponent
   
  ],
  imports: [
    BrowserModule,
    routing
    
  ],
  providers: [
  AppRoutingProviders
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
