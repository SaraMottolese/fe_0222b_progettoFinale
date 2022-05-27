import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/interface/user';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    accessToken = environment.adminToken;
    user = {
        username: '',
        password: '',
    };
    logged=false;
    utente!:User[]
    private authSubject = new BehaviorSubject(null);

    constructor(private authSrv: AuthService, private routers: Router) {}


    ngOnInit(): void {}

    onsubmit(form: { username: string; password: string }) {
        console.log(form);
        this.user.username = form.username;
        this.user.password = form.password;
        this.authSrv.login(this.user).subscribe((ele) => {
            console.log(ele);
            this.utente= ele;
            localStorage.setItem('utenteConnesso', JSON.stringify(this.utente));
            this.routers.navigate(['']);
        });
    }
}
