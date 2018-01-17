import {Injectable} from '@angular/core';
import {Init} from '../init-markers';

@Injectable()
export class MarkerService extends Init {
  constructor() {
    super();
    console.log('marker service started');
    this.load();
  }
  getMarkers() {
    var markers = JSON.parse(localStorage.getItem('markers'));
    return markers;
  }
}
