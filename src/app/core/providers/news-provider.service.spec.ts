import { TestBed } from '@angular/core/testing';

import { NewsProviderService } from './news-provider.service';

describe('NewsProviderService', () => {
  let service: NewsProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
