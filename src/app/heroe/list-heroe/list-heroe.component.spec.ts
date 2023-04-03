import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHeroeComponent } from './list-heroe.component';

describe('ListHeroeComponent', () => {
  let component: ListHeroeComponent;
  let fixture: ComponentFixture<ListHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHeroeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
