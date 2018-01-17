import {Component} from '@angular/core';
import {MarkerService} from "./services/marker-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MarkerService]
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
  markers: Marker[];

  constructor(private _markerService: MarkerService) {
    this.markers = this._markerService.getMarkers();
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
