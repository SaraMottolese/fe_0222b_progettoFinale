import { Component, OnInit } from '@angular/core';
import { ClientiService } from 'src/app/service/clienti.service';
import { Cliente } from 'src/app/interface/cliente';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ComuniService } from 'src/app/service/comuni.service';
import { ProvinceService } from 'src/app/service/province.service';

@Component({
  selector: 'app-lista-clienti',
  templateUrl: './lista-clienti.component.html',
  styleUrls: ['./lista-clienti.component.scss']
})
export class ListaClientiComponent implements OnInit {

  clienti!: Cliente[];
  pagina = 0;
  constructor(
      private clientiSrv: ClientiService,
      private routers: Router,
      private route: ActivatedRoute,
      private comuniSrv: ComuniService,
      private proviceSrv: ProvinceService
  ) {}

  ngOnInit(): void {
      this.getClienti();

  }

  creaNuovoCliente(){
      this.routers.navigate(['nuovoCliente'])
  }
  getClienti() {
      this.clientiSrv
          .getClienti(this.pagina)
          .subscribe((response) => (this.clienti = response.content));
  }

  cambiaPagina(param: string) {
      if (param == '+') {
          this.pagina++;
      } else if (param == '-') {
          this.pagina--;
      }
      this.getClienti();
  }


}
