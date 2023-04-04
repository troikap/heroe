import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingProvider } from '../providers/loading/loading.provider';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(
    private loadingProvider: LoadingProvider
  ) {}

  // necesitaria pegarle a HttpClient para poder tomar este inteceptor como se indica en la task
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingProvider.setLoading(true);
    // para simular una sobre carga y que se muestre el loading
    setTimeout(() => {
      this.loadingProvider.setLoading(false);
    }, 2000);
    return next.handle(request);
  }
}
