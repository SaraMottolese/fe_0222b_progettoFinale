import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/interface/cliente';
import { Fattura } from 'src/app/interface/fattura';
import { ClientiService } from 'src/app/service/clienti.service';
import { FattureService } from 'src/app/service/fatture.service';

@Component({
  selector: 'app-dettaglio-clienti',
  templateUrl: './dettaglio-clienti.component.html',
  styleUrls: ['./dettaglio-clienti.component.scss']
})
export class DettaglioClientiComponent implements OnInit {

  cliente!:Cliente;
  id!:number;
  sub!: Subscription;
  contatti= false;
  vediFatture=false
  indirizzi=false
  fatture!:Fattura[]
  pagina=0




constructor(private clienteSrv:ClientiService, private route:ActivatedRoute, private fatturaSrv:FattureService, private routers:Router) { }

ngOnInit(): void {
    this.getClienteById()
}
getClienteById(){
  this.sub= this.route.params.subscribe((params:Params)=>{
      this.id=+params['id'];
      console.log(this.id);
      this.clienteSrv.getClienteById(this.id).subscribe((client)=>{
          this.cliente= client;
      })
  })
 }
 getInfo(){
     this.contatti=false;
     this.vediFatture=false;
     this.indirizzi=false;
 }
 getFatture(){
  this.contatti=false;
  this.vediFatture=true;
  this.indirizzi=false;
  this.sub= this.route.params.subscribe((params:Params)=>{
      this.id=+params['id'];
      console.log(this.id);
      this.clienteSrv.getFattureCliente(this.id,this.pagina).subscribe((fatt)=>{
          this.fatture= fatt.content;
      })
  })
}
 getContatti(){
  this.contatti=true;
  this.vediFatture=false;
  this.indirizzi=false;
 }
 getIndirizzi(){
  this.contatti=false;
  this.vediFatture=false;
  this.indirizzi=true;
 }
 cambiaPagina(param: string) {
  if (param == '+') {
    this.pagina++;
  } else if (param == '-') {
    this.pagina--;
  }
  this.getFatture();
}
eliminaCliente(id:number){
  this.clienteSrv.eliminaCliente(this.cliente.id).subscribe()
  this.fatturaSrv.eliminaFatturaByCliente(this.cliente.id).subscribe();
  this.getClienteById()
  this.routers.navigate(['clienti'])
  }
}



