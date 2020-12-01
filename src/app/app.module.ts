import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SelectorComponent } from './selector/selector.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'selector', component: SelectorComponent }
  // { path: 'estado-animo', component:  },
  // { path: 'reducir-grasa', component: SecondComponent },
  // { path: 'musculatura', component: SecondComponent },
  // { path: 'resistencia', component: SecondComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SelectorComponent
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
