import { GanarMusculaturaComponent } from './selector/ganar-musculatura/ganar-musculatura.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SelectorComponent } from './selector/selector.component';
import { EstadoAnimoComponent } from './selector/estado-animo/estado-animo.component';
import { ReducirGrasaCorporalComponent } from './selector/reducir-grasa-corporal/reducir-grasa-corporal.component';
import { GanarResistenciaComponent } from './selector/ganar-resistencia/ganar-resistencia.component';
import { SafePipe } from './safe.pipe';
import { PageLayoutComponent } from './selector/page-layout/page-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'selector', component: SelectorComponent },
  { path: 'estado-animo', component: EstadoAnimoComponent },
  { path: 'reducir-grasa', component: ReducirGrasaCorporalComponent },
  { path: 'ganar-musculatura', component: GanarMusculaturaComponent },
  { path: 'ganar-resistencia', component: GanarResistenciaComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SelectorComponent,
    EstadoAnimoComponent,
    ReducirGrasaCorporalComponent,
    GanarMusculaturaComponent,
    GanarResistenciaComponent,
    SafePipe,
    PageLayoutComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
