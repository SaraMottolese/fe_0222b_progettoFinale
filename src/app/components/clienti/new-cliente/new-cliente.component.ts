import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    FormControl,
    Validators,
} from '@angular/forms';
import { Cliente } from 'src/app/interface/cliente';
import { Comune } from 'src/app/interface/comune';
import { Provincia } from 'src/app/interface/provincia';
import { ClientiService } from 'src/app/service/clienti.service';
import { ComuniService } from 'src/app/service/comuni.service';
import { ProvinceService } from 'src/app/service/province.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-new-cliente',
    templateUrl: './new-cliente.component.html',
    styleUrls: ['./new-cliente.component.scss'],
})
export class NewClienteComponent implements OnInit {
    form!: FormGroup;
    comuni!: Comune[];
    province!: Provincia[];
    tipi = ['SRL', 'SPA', 'SAS', 'PA'];
    id=0
    cliente: any={
        ragioneSociale: '',
        partitaIva: '',
        email: '',
        pec: '',
        nomeContatto: '',
        cognomeContatto: '',
        tipoCliente: '',
        emailContatto: '',
        indirizzoSedeOperativa: {
            via: '',
            civico: '',
            cap: '',
            comune: {
                id:0,
                provincia:{
                    id:0
                }
            }
        }
    };

    constructor(
        private clientiSrv: ClientiService,
        private fb: FormBuilder,
        private comuneSrv: ComuniService,
        private provinciaSrv: ProvinceService,
        private routes:Router
    ) {}

    ngOnInit(): void {
        this.getComune();
        this.getProvincia();
        this.inizializzazione();
    }

    inizializzazione() {
        this.form = this.fb.group({
            ragioneSociale: new FormControl('', Validators.required),
            partitaIva: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            pec: new FormControl(''),
            nomeContatto: new FormControl(''),
            cognomeContatto: new FormControl(''),
            tipoCliente: new FormControl('', Validators.required),
            emailContatto: new FormControl('', Validators.required),
            via: new FormControl(''),
            civico: new FormControl(''),
            cap: new FormControl(''),
            comune: new FormControl(Validators.required),
            provincia: new FormControl(''),
        });
    }

    getComune() {
        this.comuneSrv.getComuni(0).subscribe((res) => {
            this.comuni = res.content;
        });
    }

    getProvincia() {
        this.provinciaSrv.getProvince(0).subscribe(response => {
            this.province = response.content;
        });
    }


    creaCliente(form:any) {
        console.log(form);
        this.cliente.ragioneSociale = form.value.ragioneSociale;
        this.cliente.partitaIva = form.value.partitaIva;
        this.cliente.email = form.value.email;
        this.cliente.pec = form.value.pec;
        this.cliente.nomeContatto = form.value.nomeContatto;
        this.cliente.cognomeContatto = form.value.cognomeContatto;
        this.cliente.tipoCliente = form.value.tipoCliente;
        this.cliente.emailContatto = form.value.emailContatto;
        this.cliente.indirizzoSedeOperativa.via = form.value.via;
        this.cliente.indirizzoSedeOperativa.civico = form.value.civico;
        this.cliente.indirizzoSedeOperativa.cap = form.value.cap;
        this.cliente.indirizzoSedeOperativa.comune.id = form.value.comune;
        this.cliente.indirizzoSedeOperativa.comune.provincia.id= form.value.provincia;


        console.log(this.cliente);
        this.clientiSrv.nuovoCliente(this.id, this.cliente).subscribe((r) => {
            alert('Nuovo cliente registrato correttamente!');
            this.routes.navigate(['/clienti'])

            this.form.patchValue({
                ragioneSociale: '',
                partitaIva: '',
                email: '',
                pec: '',
                nomeContatto: '',
                cognomeContatto: '',
                tipoCliente: '',
                emailContatto: '',
                indirizzoSedeOperativa: {
                    via: '',
                    civico: '',
                    cap: '',
                    comune: {
                        id: '',
                        provincia:{
                            id:'',
                        }
                    },
                },
            });
        });
    }
}
