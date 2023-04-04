import { TestBed } from '@angular/core/testing';

import { AlertProvider } from './alert.provider';
import { MatDialog } from '@angular/material/dialog';

describe('AlertProvider', () => {
  let service: AlertProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        { provide: MatDialog, useValue: {}},
      ]
    }).compileComponents();
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
