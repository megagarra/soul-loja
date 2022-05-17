import { TestBed } from '@angular/core/testing';

import { WheatherApiService } from './wheather-api.service';

describe('WheatherApiService', () => {
  let service: WheatherApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WheatherApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
