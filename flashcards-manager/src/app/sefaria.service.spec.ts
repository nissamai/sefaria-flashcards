import { TestBed } from '@angular/core/testing';

import { SefariaService } from './sefaria.service';

describe('SefariaService', () => {
  let service: SefariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SefariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
