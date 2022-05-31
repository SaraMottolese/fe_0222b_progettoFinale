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

   getClientiFattura(){
    return this.http.get<any>(`${this.pathApi}/api/clienti`)
}

/****************************************   GET    ************************************************/
   getClienteById(id:number){
       return this.http.get<any>(`${this.pathApi}/api/clienti/${id}`)
   }

   getFattureCliente(id:number, pagina:number){
        return this.http.get<any>(`${this.pathApi}/api/fatture/cliente/${id}?page=${pagina}`)
   }

  getTipi(){
    return this.http.get<any>(`${this.pathApi}/api/clienti/tipicliente`)
  }

  getByRagioneSociale(data:any){
    return this.http.get<any>(`${this.pathApi}/api/clienti/ragionesociale?nome=${data}` )
  }


/****************************************   NUOVO    ************************************************/

  nuovoCliente(id:number, data:any){
    if(id=== 0){
      return this.http.post<any>(`${this.pathApi}/api/clienti`, data)
    }else{
        return this.http.put<any>(`${this.pathApi}/api/clienti/${id}`, data)
      }
  }

  /****************************************   MODIFICA    ************************************************/

  modificaCliente(data: any, id: number){
    return this.http.put<any>(`${this.pathApi}/api/clienti/${id}`, data)
  }

  /****************************************   ELIMINA    ************************************************/

  eliminaCliente(id:number){
    return this.http.delete<any>(`${this.pathApi}/api/clienti/${id}`)
  }




}
