import { TestBed, inject } from '@angular/core/testing';

import { ListcurrencyService } from './listcurrency.service';

describe('ListcurrencyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListcurrencyService]
    });
  });

  it('should be created', inject([ListcurrencyService], (service: ListcurrencyService) => {
    expect(service).toBeTruthy();
  }));
});
