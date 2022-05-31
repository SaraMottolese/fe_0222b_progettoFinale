import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Cliente } from 'src/app/interface/cliente';
import { ClientiService } from 'src/app/service/clienti.service';
import { FattureService } from 'src/app/service/fatture.service';

@Component({
  selector: 'app-nuova-fattura',
  templateUrl: './nuova-fattura.component.html',
  styleUrls: ['./nuova-fattura.component.scss']
})
export class NuovaFatturaComponent implements OnInit {
  tipi!:any[]
  form!: FormGroup
  clienti!: any[]
  pagina=0
  id=0

  fattNuova: any = {data: '', numero: 0, anno: 0, importo: 0, stato:{id:0},cliente: {}}


  constructor(private router:ActivatedRoute, private fattureSrv: FattureService, private fb: FormBuilder, private clientiSrv: ClientiService, private routes:Router) { }

  ngOnInit(): void {
    this.getClienti()
    this.stato()
    this.inizializza()
  }

  inizializza(){
    this.form = this.fb.group({
      data: new FormControl(''),
      numero: new FormControl(),
      anno: new FormControl(''),
      importo: new FormControl(''),
      stato: new FormControl(),
      ragioneSociale: new FormControl(),
    })
  }

  stato(){
    this.fattureSrv.getStatoFattura().subscribe(state =>{
      this.tipi = state.content
    })
 }

 creaFattura(form: any) {
  this.fattNuova.id = 0
  this.fattNuova.data = form.value.data
  this.fattNuova.numero = form.value.numero
  this.fattNuova.anno = form.value.anno
  this.fattNuova.importo = form.value.importo
  this.fattNuova.stato.id = Number(form.value.stato)
  this.fattNuova.cliente.id = form.value.ragioneSociale
  console.log(this.fattNuova)
  console.log(this.form)
  this.fattureSrv.nuovaFattura(this.id, this.fattNuova ).subscribe((f)=>{
    alert('Nuova fattura creata!')
    this.routes.navigate(['/fatture'])
    this.form.patchValue({
      data: '',
      numero: '',
      anno: '',
      importo: '',
      stato: '',
      cliente:{}
    })
  })
}

getClienti() {
  this.clientiSrv
      .getClienti(this.pagina).subscribe(response=>{
          this.clienti=response.content;
          console.log(this.clienti)
      })

}




}
