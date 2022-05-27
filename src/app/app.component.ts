import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fe_0222b_progettoFinale';

  constructor(private authsrv:AuthService){}

  logout(){
      this.authsrv.logout();
  }



}

