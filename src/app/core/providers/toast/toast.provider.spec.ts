import { TestBed } from '@angular/core/testing';

import { ToastProvider } from './toast.provider';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('ToastProvider', () => {
  let service: ToastProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        { provide: MatSnackBar, useValue: {}},
      ]
    }).compileComponents();
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
