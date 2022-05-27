import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettaglioClientiComponent } from '../components/clienti/dettaglio-clienti/dettaglio-clienti.component';
import { ListaClientiComponent } from '../components/clienti/lista-clienti/lista-clienti.component';
import { ListaFattureComponent } from '../components/fatture/lista-fatture/lista-fatture.component';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { UserComponent } from '../components/user/user.component';
import { AuthGuard } from '../guard/auth.guard';



const routes: Routes=[
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]

  },
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'clienti',
    component: ListaClientiComponent,
    canActivate: [AuthGuard]

  },
  {
    path:'utenti',
    component: UserComponent,
    canActivate: [AuthGuard]

  },
  {
    path:'fatture',
    component: ListaFattureComponent,
    canActivate: [AuthGuard]

  },
  {
    path:'clienti/:id',
    component: DettaglioClientiComponent,
    canActivate: [AuthGuard]

  },


]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
