import { TestBed } from '@angular/core/testing';

import { AngularrepoService } from './angularrepo.service';

describe('AngularrepoService', () => {
  let service: AngularrepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularrepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
