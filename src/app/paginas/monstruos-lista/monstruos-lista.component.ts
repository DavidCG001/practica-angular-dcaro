import { Component } from '@angular/core';
import { ServicioMonstruoService } from '../../servicios/servicio-monstruo.service';

@Component({
  selector: 'app-monstruos-lista',
  standalone: false,
  templateUrl: './monstruos-lista.component.html',
  styleUrl: './monstruos-lista.component.css'
})
export class MonstruosListaComponent {
  monstruos: any[] = [];  // Lista de monstruos
  monstruoCrear: any = { nombre: '', description: '', cantidad: 0 };  // Objeto para el formulario de creación
  monstruoEditar: any = { id: null, nombre: '', description: '', cantidad: 0 };  // Objeto para el formulario de edición

  constructor(private servicioMonstruo: ServicioMonstruoService) { }

  ngOnInit(): void {
    this.cargarMonstruos();  // Cargar los monstruos al inicializar el componente
  }

  // Cargar todos los monstruos
  cargarMonstruos() {
    this.servicioMonstruo.getMonstruos().subscribe(
      data => {
        this.monstruos = data;
      },
      error => {
        console.error('Error al cargar los monstruos:', error);
      }
    );
  }

  // Crear un nuevo monstruo
  crearMonstruo() {
    if (this.monstruoCrear.nombre && this.monstruoCrear.description) {
      this.servicioMonstruo.crearMonstruo(this.monstruoCrear).subscribe(
        response => {
          this.cargarMonstruos();  // Recargar la lista de monstruos después de crear uno nuevo
          this.limpiarFormularioCrear();  // Limpiar el formulario de creación
        },
        error => {
          console.error('Error al crear el monstruo:', error);
        }
      );
    } else {
      alert('Por favor complete los campos de nombre y descripción.');
    }
  }

  // Editar un monstruo
  editarMonstruo() {
    if (this.monstruoEditar.nombre && this.monstruoEditar.description) {
      this.servicioMonstruo.actualizarMonstruo(this.monstruoEditar).subscribe(
        response => {
          this.cargarMonstruos();  // Recargar la lista de monstruos después de la actualización
          this.limpiarFormularioEditar();  // Limpiar el formulario de edición
        },
        error => {
          console.error('Error al editar el monstruo:', error);
        }
      );
    } else {
      alert('Por favor complete los campos de nombre y descripción.');
    }
  }

  // Eliminar un monstruo
  eliminarMonstruo(id: number) {
    if (confirm('¿Estás seguro de que quieres eliminar este monstruo?')) {
      this.servicioMonstruo.eliminarMonstruo(id).subscribe(
        response => {
          this.cargarMonstruos();  // Recargar la lista de monstruos después de eliminar
          alert('Monstruo eliminado');
        },
        error => {
          console.error('Error al eliminar el monstruo:', error);
          alert('Hubo un error al eliminar el monstruo');
        }
      );
    }
  }

  // Cargar un monstruo para editar
  cargarMonstruoParaEdicion(monstruo: any) {
    this.monstruoEditar = { ...monstruo };  // Crear una copia para no modificar el original
  }

  // Limpiar el formulario de creación
  limpiarFormularioCrear() {
    this.monstruoCrear = { nombre: '', description: '', cantidad: 0 };  // Resetear el formulario
  }

  // Limpiar el formulario de edición
  limpiarFormularioEditar() {
    this.monstruoEditar = { id: null, nombre: '', description: '', cantidad: 0 };  // Resetear el formulario
  }
}