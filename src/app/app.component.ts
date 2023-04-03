import { Component } from '@angular/core';
import { LoadingProvider } from './core/providers/loading.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'heroe';

  constructor(
    public loadingProvider: LoadingProvider
  ) {
    this.loadingProvider.getLoading
  }
}
