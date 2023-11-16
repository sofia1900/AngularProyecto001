import {Component, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {BotonComponent} from "../boton/boton.component";

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule, FormsModule, BotonComponent],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})
export class LibrosComponent {
  titulo =  "El Quijote";

  titulosArray: string[] = [];

  addToDataArray(){
      this.titulosArray.push(this.titulo)
  }

}
