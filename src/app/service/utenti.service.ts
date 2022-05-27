import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class UtentiService {
    pathApi = environment.pathApi;
    pagina = 0;

    constructor(
        private http: HttpClient,
        private router: Router,
        private authSrv: AuthService
    ) {}

    getUtenti(pagina: number) {
        return this.http.get<any>(`${this.pathApi}/api/users?page=${pagina}`);
    }

}
