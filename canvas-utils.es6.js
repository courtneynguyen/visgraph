export default class CanvasUtils {
  constructor(context){
    this.context = context;
  }
  drawLine(x1, y1, x2, y2, color, lineWidth){
    var context = this.context;
    context.save();
    context.strokeStyle = color || '#f00';
    context.lineWidth = lineWidth || 1;
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.restore();
  }
}
