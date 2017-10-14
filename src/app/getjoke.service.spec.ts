import { TestBed, inject } from '@angular/core/testing';

import { GetjokeService } from './getjoke.service';

describe('GetjokeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetjokeService]
    });
  });

  it('should be created', inject([GetjokeService], (service: GetjokeService) => {
    expect(service).toBeTruthy();
  }));
});
