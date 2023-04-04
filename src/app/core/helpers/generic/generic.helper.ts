import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericHelper {

  constructor() { }

  public getMaxId(array: any) {
    const maxValue = Math.max( ...array.map( (element: any) => parseInt(element.id) ))
    return maxValue;
  }

  public compareRecords(a: any, b: any) {
    const nameA = a.position;
    const nameB = b.position;
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  }
}
