import { Component, OnInit } from '@angular/core';
import { UtentiService } from 'src/app/service/utenti.service';
import { User } from 'src/app/interface/user';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
    constructor(private userSrv: UtentiService) {}

    utenti: User[] | undefined;
    pagina = 0;

    ngOnInit(): void {
        this.getUtenti();
    }

    getUtenti() {
        this.userSrv
            .getUtenti(this.pagina)
            .subscribe((response) => (this.utenti = response.content));
    }
    cambiaPagina(param: string) {
        if (param == '+') {
            this.pagina++;
        } else if (param == '-') {
            this.pagina--;
        }
        this.getUtenti();
    }
}
