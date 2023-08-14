import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-table-pais',
  templateUrl: './table-pais.component.html',
  styleUrls: ['./table-pais.component.css']
})
export class TablePaisComponent implements OnInit {

  // inyectamos los datos a paises para poder usarlo en el HTML
  @Input() paises: Country[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
