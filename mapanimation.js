/** this is my access key unique to me. if developers would like there own go to mapBox.com and create a free account */
mapboxgl.accessToken = 'pk.eyJ1IjoianZpc3MiLCJhIjoiY2t1dWtseTh6MGd6MzMwbGZveGYybm9qcCJ9.Eo_4eWzoNkvsm-Ncouq8Pw';
    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-117.334452, 34.599292], /*Oro Grande Post Office*/
    zoom: 10,
    });
/*<!--Victor Valley Transit, The following is an example of GTFS-ContinuousStops data for bus 22 -->*/
var marker = new mapboxgl.Marker() 
    .setLngLat([-117.294703, 34.538433]).addTo(map);

const busStops = [
  [-117.318323, 34.514356], /*Stop A Victorville Transfer Center*/
  [-117.287097, 34.564499], /*Stop B Dante St & Venus Ave*/
  [-117.294703, 34.538433], /*Stop C Victorville Transportation Center*/
  [-117.319716, 34.567536], /*Stop D National Trails Highway - Air Expressway*/
  [-117.334452, 34.599292], /*Stop E Oro Grande Post Office*/
  [-117.335407, 34.744662], /*Stop F Silver Lakes Market*/
  [-117.334452, 34.599292], /*Stop E Oro Grande Post Office*/
  [-117.319716, 34.567536], /*Stop D National Trails Highway - Air Expressway*/
  [-117.294703, 34.538433], /*Stop C Victorville Transportation Center*/
  [-117.287097, 34.564499], /*Stop B Dante St & Venus Ave*/
  [-117.318323, 34.514356], /*Stop A Victorville Transfer Center*/
];

var counter = 0;
function move() {
    setTimeout(() => {
        if (counter >= busStops.length) return;
        marker.setLngLat(busStops[counter]);
        counter++;
        move();
    }, 1500)
}