import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  nclicks: number = 0;
	constructor() {
		setInterval(() => { this.nclicks++ }, 1000);
	}
}
