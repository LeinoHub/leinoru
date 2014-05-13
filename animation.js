$(document).ready(function() {
var pi =  Math.PI;
var s = Math.floor(Math.random() * window.innerWidth),
    d = Math.floor(Math.random() * window.innerHeight);

$( document ).on( "mousemove", function( event ) {
  s = event.pageX;
  d = event.pageY;
});

    (function() {
        var canvas = document.getElementById('canvas'),
            context = canvas.getContext('2d');

        window.addEventListener('resize', resizeCanvas, false);
        window.addEventListener('mousemove', drawStuff, false);

        function resizeCanvas() {

                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                drawStuff();
        }

        resizeCanvas();

        function drawStuff() {

            var x = new Array(10);
            var y = new Array(10);

                context.save();
                context.setTransform(1, 0, 0, 1, 0, 0);
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.restore();

            context.beginPath();

                      for(var i=0; i < x.length; i++) {
                         a = Math.floor(Math.random() * $(document).width());
                         b = Math.floor(Math.random() * $(document).height());
                         context.lineTo(a,b);
                         context.lineTo(s,d);
                         g = Math.floor(Math.random() * $(document).width());
                         h = Math.floor(Math.random() * $(document).height());
                         context.lineTo(g,h);
                         context.lineWidth = 1;
                         x[i] = a;
                         y[i] = b;
                         }

            context.strokeStyle = '#000';
            context.lineWidth = 1;
            context.stroke();

        }
    })();
});
