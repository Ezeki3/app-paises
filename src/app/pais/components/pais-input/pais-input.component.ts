import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  // con este @Output de emitimos el tipo de evento que estamos realizando, de tipo string
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  // este Output se va a emitir cuando se deje de escribir en el Input
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  // Recibimos algo de tipo placeholder que va a ser de tipo string
  @Input() placeholder: string = "";

  // Emitirlo cuando se deja de escribir
  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(valor => {
        this.onDebounce.emit(valor);
      });
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  //Esto conecta el debouncer con el input
  // Cada vez que el usuario escribe, se emite el valor del input, y nosotros al estas suscritos al debouncer, recibimos todos los cambios
  teclaPresionada() {
    //el next junto con el Subject nos ayudan a asegurarnos de que todas las subscripciones reciban el mismo valor
    this.debouncer.next(this.termino);
  }
}
