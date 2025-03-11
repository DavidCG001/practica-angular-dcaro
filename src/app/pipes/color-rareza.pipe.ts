import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorRareza',
  standalone: false
})
export class ColorRarezaPipe implements PipeTransform {

  transform(value: number): string {
    if (typeof value !== 'number') return '#000000'; // Negro si no es un número válido

    const colores: { [key: number]: string } = {
      1: '#6c757d', // Gris (Común)
      2: '#adb5bd', // Gris claro
      3: '#0d6efd', // Azul (Raro)
      4: '#1e90ff', // Azul claro
      5: '#198754', // Verde (Épico)
      6: '#20c997', // Verde claro
      7: '#ffc107', // Amarillo (Legendario)
      8: '#fd7e14', // Naranja
      9: '#dc3545', // Rojo (Mítico)
      10: '#8b008b' // Morado oscuro (Exótico)
    };

    return colores[value] || '#000000'; // Si el número no está en la lista, usa negro
  }

}
