import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoNaoEcontradoComponent } from './curso-nao-econtrado.component';

describe('CursoNaoEcontradoComponent', () => {
  let component: CursoNaoEcontradoComponent;
  let fixture: ComponentFixture<CursoNaoEcontradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoNaoEcontradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoNaoEcontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
