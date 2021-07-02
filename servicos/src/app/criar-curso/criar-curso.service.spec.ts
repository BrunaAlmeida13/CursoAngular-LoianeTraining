import { TestBed } from '@angular/core/testing';

import { CriarCursoService } from './criar-curso.service';

describe('CriarCursoService', () => {
  let service: CriarCursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriarCursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
