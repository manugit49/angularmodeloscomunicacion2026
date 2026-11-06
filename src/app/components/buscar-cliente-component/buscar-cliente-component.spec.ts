import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscarClienteComponent } from './buscar-cliente-component';

describe('BuscarClienteComponent', () => {
  let component: BuscarClienteComponent;
  let fixture: ComponentFixture<BuscarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscarClienteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BuscarClienteComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
