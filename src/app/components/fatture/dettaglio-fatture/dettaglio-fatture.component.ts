import { Component, OnInit } from '@angular/core';
import { Fattura } from 'src/app/interface/fattura';
import { FattureService } from 'src/app/service/fatture.service';
import { ClientiService } from 'src/app/service/clienti.service';
import { Cliente } from 'src/app/interface/cliente';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-dettaglio-fatture',
  templateUrl: './dettaglio-fatture.component.html',
  styleUrls: ['./dettaglio-fatture.component.scss']
})
export class DettaglioFattureComponent implements OnInit {
  fattura!:Fattura;
  id!:number;
  sub!:Subscription
  cliente!:Cliente
  pagina=0;
  fatture!:Fattura[]

  constructor(private clienteSrv: ClientiService, private fatturaSrv :FattureService, private route:ActivatedRoute, private routers:Router ) { }

  ngOnInit(): void {
    this.getFatturaById()
  }

  getFatturaById(){
    this.sub= this.route.params.subscribe((params:Params)=>{
      this.id=+params['id'];
      console.log(this.id);
      this.fatturaSrv.getFatturaById(this.id).subscribe((fatt)=>{
          this.fattura= fatt;
      })
  })
  }
  eliminaFattura(){
    this.fatturaSrv.eliminaFattura(this.fattura.id).subscribe();
    this.getFatture()
    this.routers.navigate(['fatture'])
  }
  getFatture() {
    this.fatturaSrv.getFatture(this.pagina).subscribe((response)=> (this.fatture=response.content))
  }


}
