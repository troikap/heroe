import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditHeroeComponent } from './add-edit-heroe.component';

describe('AddEditHeroeComponent', () => {
  let component: AddEditHeroeComponent;
  let fixture: ComponentFixture<AddEditHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditHeroeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
