import { Component, effect, inject, NgModule, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from "./components/counter/counter";
import { FormsModule, NgModel } from '@angular/forms';
import { UtilityService } from './services/utility-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Counter, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private utilityService = inject(UtilityService);

  constructor() {
  effect(() => {
    document.body.style.backgroundColor = this.bodyColor();
  });
  }

  protected readonly title = signal('angular');

  bodyColor = this.utilityService.bodyColor;
}
