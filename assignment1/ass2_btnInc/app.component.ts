import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  value=0;
  increment(){
    this.value++;
  }
  decrement(){
    this.value--;
  }
}
