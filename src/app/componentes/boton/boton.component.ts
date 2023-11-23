import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.css'
})
export class BotonComponent {
  @Output() clicEnBoton = new EventEmitter();
  @Input() label = "";

  onClick() {
    this.clicEnBoton.emit();
  }

}
