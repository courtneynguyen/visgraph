var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var canvasUtils = {
  drawLine: function(x1, y1, x2, y2, color, lineWidth){
    // context.save();
    window.context.strokeStyle = color || '#f00';
    window.context.lineWidth = lineWidth || 1;
    window.context.beginPath();
    window.context.moveTo(x1, y1);
    window.context.lineTo(x2, y2);
    window.context.stroke();
    // context.restore();
  },
  drawText: function(text, x, y, size, color){
    window.context.fillStyle = color || '#f00';
    window.context.font = size + 'px sans-serif';
    window.context.fillText(text, x, y);
  }
}

var Graph = function(args){
  this.increment = args.increment;
  this.min = args.min;
  this.max = args.max;
  this.margin = args.margin;

  // calculated properties
  this.numberOfIncrements = this.max % this.increment === 0 ?  this.max / this.increment : alert('need to round');
  this.totalRows = this.numberOfIncrements * 4;
  this.spaceRatio = (canvas.height - (this.margin * 2)) / this.totalRows;
  this.incrementsUntilLabel = (this.totalRows / 2) / this.numberOfIncrements;
  // this.context = args.context;
  this.setup();
}

Graph.prototype.setup = function(){

  // this.context.translate(canvas.width / 2, canvas.height / 2);
  window.context.clearRect(0, 0, canvas.width, canvas.height);
  this.createGrid();
  // context.restore();
}

Graph.prototype.updateGraph = function(){
  // calculated properties
  this.numberOfIncrements = this.max % this.increment === 0 ?  this.max / this.increment : alert('need to round');
  this.totalRows = this.numberOfIncrements * 4;
  this.spaceRatio = (canvas.height - (this.margin * 2)) / this.totalRows;
  this.incrementsUntilLabel = (this.totalRows / 2) / this.numberOfIncrements;

  this.setup();
}

Graph.prototype.createGrid = function(){
  this.drawLines(true);
  this.drawLines(false);
}

Graph.prototype.drawLines = function(isHorizontal){
  window.context.save();
  var x1 = this.margin;
  var y1 = this.margin;
  var x2 = canvas.width - this.margin;
  var y2 = canvas.height - this.margin;

  var increment = this.max;
  if(isHorizontal){
    y2 = this.margin;
  }
  else{
    x2 = this.margin;
    increment = this.max * -1;
  }

  for(var i = 0, initial = this.margin; i <= this.totalRows; i++){

    if(i === (this.totalRows / 2)){
      canvasUtils.drawLine(x1, y1, x2, y2, '#000', 2);
    }
    else {
      canvasUtils.drawLine(x1, y1, x2, y2, '#ddd', 2);
    }

    if(isHorizontal){
      y1 += this.spaceRatio;
      y2 += this.spaceRatio;

      if(i % this.incrementsUntilLabel === 0){
        canvasUtils.drawText(increment, x1 - this.spaceRatio, y1 - (this.margin / 2), this.spaceRatio - 5, 'red');
        increment -= this.increment;
      }
    }
    else{
      x1 += this.spaceRatio;
      x2 += this.spaceRatio;

      if(i % this.incrementsUntilLabel === 0){
        canvasUtils.drawText(increment, x1 - this.spaceRatio, y1, this.spaceRatio-5, 'red');
        increment += (this.increment * 1);
      }
    }
  }
  window.context.restore();
}
