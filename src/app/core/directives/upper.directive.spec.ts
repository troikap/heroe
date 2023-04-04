import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpperDirective } from './upper.directive';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <input id=input type="text" value='Esto deberia ser todo en uppercase' appUpper/>`
})
class HostComponent {}

describe('UpperDirective', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;
  let input: DebugElement;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [UpperDirective, HostComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    input = fixture.debugElement.query(By.css('input'));
    input.triggerEventHandler('keydown', null);
    input.triggerEventHandler('window:keydown', null);
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fixture.detectChanges();
        return resolve(true);
      }, 100);
    });
  });
  
  it('should create an instance', () => {
    expect(input.nativeElement.value).toBe(input.nativeElement.value.toUpperCase());
  });
});
