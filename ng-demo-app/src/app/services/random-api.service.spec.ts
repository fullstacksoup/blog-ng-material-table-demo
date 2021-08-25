import { TestBed } from '@angular/core/testing';

import { RandomApiService } from './random-api.service';

describe('RandomApiService', () => {
  let service: RandomApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
