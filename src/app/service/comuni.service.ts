import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthData } from './auth.service';
import { BehaviorSubject } from 'rxjs';
import { Comune } from '../interface/comune';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {

  pathApi!: string;
  private authSubject = new BehaviorSubject<null|AuthData>(null);
  user$ = this.authSubject.asObservable()


  constructor(private http: HttpClient) {
      this.pathApi=environment.pathApi
  }

  getComuni(pagina: number) {
      return this.http.get<any>(`${environment.pathApi}/api/comuni?page=${pagina}`);
  }

  getComuniById(id:number){

    return this.http.get<any>(`${this.pathApi}/api/comuni/${id}`)
  }
}
