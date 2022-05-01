let locate= ()=>{
  
    const lat = 13.092350;
    const long =80.177269 ;
    console.log(lat , long)
  
  mapboxgl.accessToken = 'pk.eyJ1Ijoic291bXlhMDciLCJhIjoiY2t5bjYzOHA5MDliajJ3bjlmdnNqNWp4dSJ9.x0juxRfciGE-vDfJI8nbSA';
  var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [long,lat],
  zoom:14,
  });
  
  // Create a new marker.
  const marker = new mapboxgl.Marker()
  .setLngLat([long, lat])
  .addTo(map);
  
  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav, 'top-left');
  
  map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true
      }));
  
  }
  
  console.log(navigator.geolocation.getCurrentPosition)
  locate();
  
//   navigator.geolocation.getCurrentPosition( locate, error)