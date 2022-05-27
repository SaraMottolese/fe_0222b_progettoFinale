import { Component, OnInit } from '@angular/core';
import { Fattura } from 'src/app/interface/fattura';
import { FattureService } from 'src/app/service/fatture.service';

@Component({
    selector: 'app-lista-fatture',
    templateUrl: './lista-fatture.component.html',
    styleUrls: ['./lista-fatture.component.scss'],
})
export class ListaFattureComponent implements OnInit {
    pagina = 0;
    fatture!: Fattura[]
    modal=false;
    visualizzaFatture=true;
    fattura!:Fattura

    constructor(private fatturaSrv: FattureService) {}

    ngOnInit(): void {
        this.getFatture();
        console.log(this.modal)
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

    apriModale(){
        this.modal=true
        this.visualizzaFatture=false
    }
    chiudiModale(){
        this.modal=false
        this.visualizzaFatture=true
    }



}
