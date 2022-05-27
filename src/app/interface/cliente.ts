import { Comune } from "./comune";

export interface Cliente {
  email:string;
  id: number;
  partitaIva: string;
  ragioneSociale:string;
  tipoCliente: string;
  pec: string;
  telefono: string;
  nomeContatto: string;
  cognomeContatto: string;
  emailContatto: string;
  telefonoContatto:number;
  indirizzoSedeOperativa:{
    id:number;
    via:string;
    civico: string;
    cap: string;
    localita:string;
    comune: Comune;
  };
  indirizzoSedeLegale:{
    id:number;
    via: string;
    civico:string;
    cap:string;
    localita:string;
    comune: Comune
  };

  }
