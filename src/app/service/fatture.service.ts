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

    nuovaFattura(id:number, data:any){
      if(id=== 0){
        return this.http.post<any>(`${this.pathApi}/api/fatture`, data)}
        else{
          return this.http.put<any>(`${this.pathApi}/api/fatture/${id}`, data)
        }
    }
    eliminaFatturaByCliente(id:number){
      return this.http.delete<any>(`${this.pathApi}/api/fatture/cliente/${id}`)
    }
    getFatturaById(id:number){
      return this.http.get<any>(`${this.pathApi}/api/fatture/${id}`);
    }
    eliminaFattura(id:number){
      return this.http.delete<any>(`${this.pathApi}/api/fatture/${id}`)
    }

    modificaFattura(data:any,id:number){
      return this.http.put<any>(`${this.pathApi}/api/fatture/${id}`, data)
    }

    getStatoFattura(){
      return this.http.get<any>(`${this.pathApi}/api/statifattura?page=0&size=20&sort=id,ASC`)
    }
}
