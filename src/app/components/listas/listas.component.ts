import { Component, OnInit, Input } from '@angular/core';
import { Lista } from '../../models/lista.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() listas: Lista[] = [];
  @Input() terminados = true;

  constructor( private router: Router ) { }

  ngOnInit() {}

  verItems( lista: Lista ) {
    
    if(this.terminados) {

      this.router.navigateByUrl(`/tabs/tab2/agregar/${ lista.id }`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${ lista.id }`);

    }
  }
}
