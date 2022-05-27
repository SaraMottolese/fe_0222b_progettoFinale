import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class FattureService {
    pathApi!: string;
    id!: number;

    constructor(private http: HttpClient) {
        this.pathApi = environment.pathApi;
    }

    getFatture(pagina: number) {
        return this.http.get<any>(`${this.pathApi}/api/fatture?page=${pagina}`);
    }

    nuovaFattura(data:any){
        return this.http.post<any>(`${this.pathApi}/api/fatture`, data)
    }
}
