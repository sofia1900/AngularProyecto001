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
  codigo = "2000";

}
