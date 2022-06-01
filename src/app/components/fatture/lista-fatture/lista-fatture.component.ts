import { Component, OnInit } from '@angular/core';
import { Fattura } from 'src/app/interface/fattura';
import { ClientiService } from 'src/app/service/clienti.service';
import { FattureService } from 'src/app/service/fatture.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Cliente } from 'src/app/interface/cliente';


@Component({
    selector: 'app-lista-fatture',
    templateUrl: './lista-fatture.component.html',
    styleUrls: ['./lista-fatture.component.scss'],
})
export class ListaFattureComponent implements OnInit {
    pagina = 0;
    fatture!: Fattura[]
    fattura!:Fattura
    form!:FormGroup
    clienti!: Cliente[];


    constructor(private fatturaSrv: FattureService, private clientiSrv:ClientiService, private fb:FormBuilder
        ) {}

    ngOnInit(): void {
        this.getFatture();
        this.getClienti();
        this.inizializza();

    }

    cambiaPagina(param: string) {
        if (param == '+') {
            this.pagina++;
        } else if (param == '-') {
            this.pagina--;
        }
        this.getFatture();
    }

    getFatture() {
        this.fatturaSrv.getFatture(this.pagina).subscribe((response)=> (this.fatture=response.content))
    }

    getClienti(){
        this.clientiSrv
            .getClienti(this.pagina)
            .subscribe((response) => {this.clienti = response.content});
    }

    inizializza(){
        this.form=this.fb.group({
            cliente:new FormControl(),
            statoPagamento: new FormControl()
        })
    }


    getFatturaByCliente(){
        let data=this.form.value.cliente
        console.log(data)
        this.fatturaSrv
        .getFatturaByCliente(data)
        .subscribe((response )=> {this.fatture = response.content
            console.log(response)}
            );
      }

      getFatturaByStato(){
        let data=this.form.value.statoPagamento
        console.log(data)
        this.fatturaSrv
        .getFatturaByStato(data)
        .subscribe((response )=> {this.fatture = response.content
            console.log(response)}
            );
      }






}
