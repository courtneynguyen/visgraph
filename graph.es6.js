var pi = Math.PI;
var tau = pi * 2;
var deg = tau / 360;

export default class Graph {
  constructor(args){
    this.increment = args.increment;
    this.min = args.min;
    this.max = args.max;
    this.pixelRatio = 10;
    this.context = args.context;
    this.setup();
  }
  setup => {
    this.context.save();
    this.context.translate(canvas.width / 2, canvas.height / 2);

    context.restore();
  }
}
