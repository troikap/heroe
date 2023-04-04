import { TestBed } from '@angular/core/testing';

import { LoadingProvider } from './loading.provider';

describe('LoadingProvider', () => {
  let service: LoadingProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: []
    }).compileComponents();
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
