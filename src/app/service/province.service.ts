import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthData } from './auth.service';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

    pathApi!: string;
    private authSubject = new BehaviorSubject<null|AuthData>(null);
    user$ = this.authSubject.asObservable()


    constructor(private http: HttpClient) {
        this.pathApi=environment.pathApi
    }

    getProvince(pagina: number) {
        return this.http.get<any>(`${environment.pathApi}/api/province?page=${pagina}`);
    }}
