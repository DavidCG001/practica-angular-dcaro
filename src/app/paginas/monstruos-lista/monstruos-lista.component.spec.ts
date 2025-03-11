import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstruosListaComponent } from './monstruos-lista.component';

describe('MonstruosListaComponent', () => {
  let component: MonstruosListaComponent;
  let fixture: ComponentFixture<MonstruosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonstruosListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonstruosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
