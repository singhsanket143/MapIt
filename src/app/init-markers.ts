export class Init {
  load() {
    if (localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined) {
      console.log('No markers found');

      var markers = [
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
      localStorage.setItem('markers', JSON.stringify(markers));
    } else {
      console.log('Loading markers');
    }
  }

}
