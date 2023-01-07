var map = null;

function initMap() {
  var mapOptions = {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10
  };

  //map = new naver.maps.Map(document.getElementById('map'), mapOptions);
  map = new naver.maps.Map('map', mapOptions);
}

initMap();

console.log("!");
