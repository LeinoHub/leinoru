$(document).ready(function() {
var pi =  Math.PI;
var s = canvas.width,
    d = canvas.height;

$( document ).on( "mousemove", function( event ) {
  s = event.pageX;
  d = event.pageY;

// console.log( "pageX: " + event.pageX + ", pageY: " + event.pageY );
});

    (function() {
        var canvas = document.getElementById('canvas'),
            context = canvas.getContext('2d');

        // resize the canvas to fill browser window dynamically
        window.addEventListener('resize', resizeCanvas, false);
        window.addEventListener('mousemove', drawStuff, false);

        // window.addEventListener('scroll', resizeCanvas, false);
        function resizeCanvas() {

                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                /**
                 * Your drawings need to be inside this function otherwise they will be reset when
                 * you resize the browser window and the canvas goes will be cleared.
                 */

                drawStuff();
        }
        resizeCanvas();

        function drawStuff() {



            var x = new Array(10);
            var y = new Array(10);
                context.save();

                // Use the identity matrix while clearing the canvas
                context.setTransform(1, 0, 0, 1, 0, 0);
                context.clearRect(0, 0, canvas.width, canvas.height);

                // Restore the transform
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
                         var b;
                         // console.log(b +' '+Math.pow(b, 2));

                         x[i] = a;
                         y[i] = b;
                         }

            context.strokeStyle = '#000';
            context.lineWidth = 1;
            context.stroke();

        }


    })();

});




});
