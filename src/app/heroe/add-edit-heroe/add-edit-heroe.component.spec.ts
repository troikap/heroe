import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditHeroeComponent } from './add-edit-heroe.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AddEditHeroeComponent', () => {
  let component: AddEditHeroeComponent;
  let fixture: ComponentFixture<AddEditHeroeComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ AddEditHeroeComponent ],
      imports: [
        FormsModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
        MatGridListModule,
        MatFormFieldModule,
        MatSelectModule,
        MatSnackBarModule,
        MatInputModule,
        NoopAnimationsModule
      ],
      providers: [
        FormBuilder,
        { provide: ActivatedRoute, useValue: {}},
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddEditHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
