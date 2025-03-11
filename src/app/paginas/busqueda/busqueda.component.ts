import { Component } from '@angular/core';
import { Iarmaduras } from '../../iarmaduras';
import { Iarmas } from '../../iarmas';
import { ApiService } from '../../servicios/api.service';

@Component({
  selector: 'app-busqueda',
  standalone: false,
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {
  queryArma: string = '';
  queryArmadura: string = '';

  armas: Iarmas[] = [];
  armasFiltradas: Iarmas[] = [];
  armaduras: Iarmaduras[] = [];
  armadurasFiltradas: Iarmaduras[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.obtenerArmas().subscribe(response => {
      this.armas = response;
      this.armasFiltradas = response;
    });

    this.apiService.obtenerArmaduras().subscribe(response => {
      this.armaduras = response;
      this.armadurasFiltradas = response;
    });
  }

  buscarArma(): void {
    this.armasFiltradas = this.armas.filter(arma =>
      arma.name.toLowerCase().includes(this.queryArma.toLowerCase())
    );
  }

  buscarArmadura(): void {
    this.armadurasFiltradas = this.armaduras.filter(armadura =>
      armadura.name.toLowerCase().includes(this.queryArmadura.toLowerCase())
    );
  }
}
