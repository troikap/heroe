import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingProvider {
  private loading: boolean = false;

  constructor() { }
  
  // le agrego un settimeout para el cierre del loading, y que se pueda persibir su presentacion (a modo practico)
  async setLoading(loading: boolean): Promise<any> {
    return new Promise<any>(resolve => {
      if (loading == true) resolve(this.loading = loading);
      setTimeout( async () => {
        resolve(this.loading = loading);
      }, 1000);
    })
  }

  getLoading(): boolean {
    return this.loading;
  }
}
