import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComuniComponent } from './components/comuni/comuni.component';
import { DettaglioFattureComponent } from './components/fatture/dettaglio-fatture/dettaglio-fatture.component';
import { ListaFattureComponent } from './components/fatture/lista-fatture/lista-fatture.component';
import { ListaClientiComponent } from './components/clienti/lista-clienti/lista-clienti.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { StatoFatturaComponent } from './components/fatture/stato-fattura/stato-fattura.component';
import { UserComponent } from './components/user/user.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { DettaglioClientiComponent } from './components/clienti/dettaglio-clienti/dettaglio-clienti.component';
import { RoutingModule } from './routing/routing.module';
import { InterceptorChiamateInterceptor } from './interceptor/interceptor-chiamate.interceptor';
import { NewClienteComponent } from './components/clienti/new-cliente/new-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ComuniComponent,
    DettaglioFattureComponent,
    ListaFattureComponent,
    ListaClientiComponent,
    LoginComponent,
    SignupComponent,
    StatoFatturaComponent,
    UserComponent,
    HomeComponent,
    DettaglioClientiComponent,
    NewClienteComponent

    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RoutingModule

  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass:InterceptorChiamateInterceptor,
      multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
