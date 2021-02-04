function colorSelect(hex)
{
  penColor = "#" + hex;
}
function penSize(number)
{
  var ctx = myCanvas.getContext("2d");
  ctx.lineWidth = number;
}

window.onload = function() {
	var myCanvas = document.getElementById("myCanvas");
	var ctx = myCanvas.getContext("2d");
  myCanvas.width = window.innerWidth;
	myCanvas.height = window.innerHeight;
  ctx.lineWidth = 2;
  penColor = "#000";

	if(myCanvas){
		var isDown = false;
		var canvasX, canvasY;

		$(myCanvas)
		.mousedown(function(e){
			isDown = true;
			ctx.beginPath();
			canvasX = e.pageX - myCanvas.offsetLeft;
			canvasY = e.pageY - myCanvas.offsetTop;
			ctx.moveTo(canvasX, canvasY);
		})
		.mousemove(function(e){
			if(isDown !== false) {
				canvasX = e.pageX - myCanvas.offsetLeft;
				canvasY = e.pageY - myCanvas.offsetTop;
				ctx.lineTo(canvasX, canvasY);
				ctx.strokeStyle = penColor;
				ctx.stroke();
			}
		})
		.mouseup(function(e){
			isDown = false;
			ctx.closePath();
		});
	}

	draw = {
		started: false,
		start: function(evt) {

			ctx.beginPath();
			ctx.moveTo(
				evt.touches[0].pageX,
				evt.touches[0].pageY
			);

			this.started = true;

		},
		move: function(evt) {

			if (this.started) {
				ctx.lineTo(
					evt.touches[0].pageX,
					evt.touches[0].pageY
				);

				ctx.strokeStyle = "#000";
				ctx.lineWidth = 5;
				ctx.stroke();
			}

		},
		end: function(evt) {
			this.started = false;
		}
	};

	myCanvas.addEventListener('touchstart', draw.start, false);
	myCanvas.addEventListener('touchend', draw.end, false);
	myCanvas.addEventListener('touchmove', draw.move, false);

	document.body.addEventListener('touchmove',function(evt){
		evt.preventDefault();
	},false);
};
