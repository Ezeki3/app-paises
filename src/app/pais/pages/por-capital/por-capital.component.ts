import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino: string = ''
  hayError: boolean = false;

  // Inicializamos paises con los valores de Country como un array vacio
  paises: Country[] = [];

  constructor(
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {

    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(termino)
      .subscribe((paises) => {
        console.log(paises);
        this.paises = paises;

      }, (err) => {
        this.hayError = true;
        this.paises = []
      })
  }

}
