import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  value = 0;
  increment() {
    if (this.value < 10) {
      this.value++;
    }
  }

  decrement() {
    if (this.value > 0) {
      this.value--;
    }
  }
}
