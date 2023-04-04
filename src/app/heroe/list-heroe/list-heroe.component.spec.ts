import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHeroeComponent } from './list-heroe.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table' 
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ListHeroeComponent', () => {
  let component: ListHeroeComponent;
  let fixture: ComponentFixture<ListHeroeComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ ListHeroeComponent ],
      imports: [
        HttpClientTestingModule,
        MatGridListModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatTableModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: MatSnackBar, useValue: {}},
        { provide: MatDialog, useValue: {}},
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
