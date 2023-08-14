import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country, Currency } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = ''
  hayError: boolean = false;

  // Inicializamos paises con los valores de Country como un array vacio
  paises: Country[] = [];

  constructor(
    // inyectamos el servicio para poder consumirlo
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {

    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(termino)
      // para que busque segun el termino debemos estar subscritos para obtener una respuesta y en este caso poder pasarlo a un log

      // FORMA ACTUAL DE USAR EL SUBSCRIBE
      // .subscribe({
      //   next: ((resp) => console.log(resp)),
      //   error: ((err) => this.hayError = true)
      // });

      // FORMA ANTIGUA DE COMO SE MANEJAN LOS PARAMETROS EN EL SUBSCRIBE
      .subscribe((paises) => {
        console.log(paises);
        //Asignamos el valor que obtenemos de la consulta y se la pasamos a paises: este se utiliza en el html
        this.paises = paises;

      }, (err) => {
        this.hayError = true;
        // en caso de que no haya nada, mostramos paises como un array vacio
        this.paises = []
      })
  }

  sugerencias(termino: string) {
    this.hayError = false;
    // TODO: crear sugerencias
  }
}
