import {Component} from '@angular/core';

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
  markername: string;
  markerLat: number;
  markerLng: number;
  markerDraggable: string;
  markers: Marker[] = [
    {
      name: 'Uttar Pradesh',
      lat: 26.8467,
      lng: 80.9462,
      draggable: false
    },
    {
      name: 'Punjab',
      lat: 31.1471,
      lng: 75.3412,
      draggable: false
    },
    {
      name: 'Kerala',
      lat: 10.8505,
      lng: 76.2711,
      draggable: false
    }
  ];

  constructor() {
  }

  clickedMarker(marker: Marker, index: number) {
    console.log('CLicked Marker: ' + marker.name + 'at index ' + index);
  }

  mapClicked($event: any) {
    const newMarker = {
      name: 'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    };
    this.markers.push(newMarker);
  }

  markerDragEnd(marker: Marker, $event: any) {
    console.log('dragend', marker, $event);
    var updmarker = {
      name: marker.name,
      lat: parseFloat('' + marker.lat),
      lng: parseFloat('' + marker.lng),
      draggable: false
    };
    var newLat = $event.coords.lat;
    var newlng = $event.coords.lng;
  }

  addMarker() {
    if (this.markerDraggable == 'yes') {
      var isDraggable = true;
    } else {
      var isDraggable = true;
    }
    const newMarker = {
      name: 'Untitled',
      lat: parseFloat('' + this.markerLat),
      lng: parseFloat('' + this.markerLng),
      draggable: isDraggable
    };
    this.markers.push(newMarker);
  }
}

interface Marker {
  name?: string;
  lat: number;
  lng: number;
  draggable?: boolean;
}
