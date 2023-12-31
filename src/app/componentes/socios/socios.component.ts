import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BotonComponent} from "../boton/boton.component";

@Component({
  selector: 'app-socios',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, BotonComponent],
  templateUrl: './socios.component.html',
  styleUrl: './socios.component.css'
})
export class SociosComponent {

  tituloBoton = "Añadir codigo";

  codigo = "2000";

  sociosArray: string[] = [];

  addToDataArray(){
    this.sociosArray.push(this.codigo)
  }

}
