import { Component, Inject } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apiService: ApiService;
  constructor( @Inject(ApiService) apiService) {
    this.apiService = apiService;
  }

  invokeApi(): void {
    this.apiService.get();
  }
}
