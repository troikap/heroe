import { Injectable } from '@angular/core';

const parametric: any = {
  HEROES_KEY: 'heroes',
};

@Injectable({
  providedIn: 'root'
})
export class StorageProvider {

  constructor() { }

  public setObject(record: string, value: any) {
    return localStorage.setItem(record, JSON.stringify(value));
  }
  
  public getObject(record: string): any {
    let data = localStorage.getItem(record);
    if (data) data = JSON.parse(data);
    return data;
  }

  public clearObject(record: string){
    localStorage.removeItem(record);
  }

  public async clearAllObjects() {
    localStorage.clear();
  }
}
