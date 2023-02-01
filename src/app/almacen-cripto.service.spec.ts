import { TestBed } from '@angular/core/testing';

import { AlmacenCriptoService } from './almacen-cripto.service';

describe('AlmacenCriptoService', () => {
  let service: AlmacenCriptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlmacenCriptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
