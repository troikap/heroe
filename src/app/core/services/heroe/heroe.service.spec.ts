import { TestBed } from '@angular/core/testing';

import { HeroeService } from './heroe.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HeroeService', () => {
  let service: HeroeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: []
    }).compileComponents();
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
