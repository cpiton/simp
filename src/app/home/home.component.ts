import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cards = [
    { title: 'Card 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imageUrl: 'https://via.placeholder.com/150' },
    { title: 'Card 2', content: 'Suspendisse venenatis quam sed libero euismod feugiat.', imageUrl: 'https://via.placeholder.com/150' },
    { title: 'Card 3', content: 'Praesent elementum elit at tellus. Curabitur metus ipsum, luctus eu.', imageUrl: 'https://via.placeholder.com/150' },
  ];
}
