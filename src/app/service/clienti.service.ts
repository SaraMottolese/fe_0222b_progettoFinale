import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthData } from './auth.service';
import { BehaviorSubject, throwError } from "rxjs";
import { Cliente } from '../interface/cliente';



@Injectable({
  providedIn: 'root'
})
export class ClientiService {
    pathApi!:string;
    private authSubject = new BehaviorSubject<null|AuthData>(null);
    user$ = this.authSubject.asObservable()



  constructor(private http:HttpClient) {
    this.pathApi=environment.pathApi
   }

   getClienti(pagina:number){
       return this.http.get<any>(`${this.pathApi}/api/clienti?page=${pagina}`)
   }

   getClienteById(id:number){
       return this.http.get<any>(`${this.pathApi}/api/clienti/${id}`)
   }

   getFattureCliente(id:number, pagina:number){
        return this.http.get<any>(`${this.pathApi}/api/fatture/cliente/${id}?page=${pagina}`)
   }

  getTipi(){
    return this.http.get<any>(`${this.pathApi}/api/clienti/tipicliente`)
  }

}
