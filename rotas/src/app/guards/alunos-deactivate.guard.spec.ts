import { TestBed } from '@angular/core/testing';

import { AlunosDeactivate } from './alunos-deactivate.guard';

describe('AlunosDeactivateService', () => {
  let service: AlunosDeactivate;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlunosDeactivate);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
