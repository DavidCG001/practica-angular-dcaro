import { TestBed } from '@angular/core/testing';
import { ServicioMonstruoService } from './servicio-monstruo.service';



describe('ServicioMonstruoService', () => {
  let service: ServicioMonstruoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioMonstruoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
