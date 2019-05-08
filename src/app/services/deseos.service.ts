import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[];

  constructor() {

    let lista1 = new Lista("Recolectar priedras del infinito");
    let lista2 = new Lista("Heroes a desaparecer");

    this.listas.push(lista1, lista2);
  }

  getListas(): Lista[] {
    return this.listas;
  }
}
