import { Component } from '@angular/core';
import { EventCardComponent } from './event-card/event-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EventCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
