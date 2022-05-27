import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
    user = {
        username: '',
        password: '',
        email: '',
        roles: [''],
        nome: '',
        cognome: '',
    };

    constructor(private authSrv: AuthService, private routers:Router) {}

    ngOnInit(): void {}

    onsubmit(form: any) {
        console.log(form);
        let ruolo=form.roles
        this.user.username=form.username;
        this.user.password=form.password;
        this.user.email=form.email;
        this.user.nome= form.nome;
        this.user.cognome=form.cognome;
        this.user.roles.splice(0,1)
        this.user.roles.push(form.roles);

        console.log(this.user)

        this.authSrv.signup(this.user).subscribe((ele) => {
            console.log(ele);
            this.routers.navigate(['login'])
        });
    }
}
