import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInventarioComponent } from './show-inventario.component';

describe('ShowInventarioComponent', () => {
  let component: ShowInventarioComponent;
  let fixture: ComponentFixture<ShowInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowInventarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
