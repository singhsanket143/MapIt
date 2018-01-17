import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Start Postition
  zoom = 10;
  lat = 28.7041;
  lng = 77.1025;
  markers: Marker[] = [
    {
      name: 'Uttar Pradesh',
      lat: 26.8467,
      lan: 80.9462
    },
    {
      name: 'Punjab',
      lat: 31.1471,
      lan: 75.3412
    },
    {
      name: 'Kerala',
      lat: 10.8505,
      lan: 76.2711
    }
  ];

  constructor() {}

}

interface Marker {
  name?: string;
  lat: number;
  lan: number;
  draggable?: boolean;
}
