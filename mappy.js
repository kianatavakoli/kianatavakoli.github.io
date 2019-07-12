var view;
var map;
var initiallocation;
var london;
var panHome;

function init() {
  initiallocation = ol.proj.fromLonLat([41.043316, 28.862457]);
  london = ol.proj.fromLonLat([-.012755,51.507222]);
  philz = ol.proj.fromLonLat([37.442001, -122.161389]);
  biac = ol.proj.fromLonLat([-37.495357, -122.219219]);
  stanfordoval = ol.proj.fromLonLat([37.430203, -122.169370]);


  view = new ol.View({
    center: initiallocation,
    zoom: 6
  });

  map = new ol.Map ({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    loadsTilesWhileAnimating: true,
    view: view
  });
}

function panHome() {
  view.animate({
    center: london,
    duration: 2000
  });
}

function goToPhilz() {
  view.animate({
    center: philz,
    duration: 2000
  });
}

function goToBiac() {
  view.animate({
    center: biac,
    duration: 2000
  });
}

function goToStanfordOval() {
  view.animate({
    center: stanfordoval,
    duration: 2000
  });
}


window.onload = init;
