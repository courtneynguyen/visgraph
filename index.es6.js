import Graph from './graph.js';
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
window.addEventListener('loaded', start);
start => {
    var piGraph = new Graph({
      context: context,
      increment: 5,
      min: 0,
      max: 25,
      pixelRatio: 10
    });
}
