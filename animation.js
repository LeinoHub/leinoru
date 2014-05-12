$(document).ready(function() {
var pi =  Math.PI;
var s = canvas.width,
    d = canvas.height;
$(document).on('click', function ( event ) {
    var r, g, b;
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 205);
    // var color = 'rgb('+r+','+g+','+b+');';


});
$( document ).on( "mousemove", function( event ) {
  s = event.pageX;
  d = event.pageY;
console.log( "pageX: " + event.pageX + ", pageY: " + event.pageY );
resizeCanvas();
});

(function() {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d');

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);
        window.addEventListener('mousemove', resizeCanvas, false);

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

      var radius = 5;
      var startAngle = 0 * Math.PI;
        var endAngle = 2 * Math.PI;
        var counterClockwise = false;
        var x = new Array(100+Math.floor(Math.random() * 100));
        var y = new Array(100+Math.floor(Math.random() * 100));
        context.beginPath();

          for(var i=0; i < x.length; i++) {
             a = Math.floor(Math.random() * $(document).width());
             b = Math.floor(Math.random() * $(document).height());
             // context.arc(a, b, radius, startAngle, endAngle, counterClockwise);
             // context.fillStyle='#f00';
             context.lineTo(a,b);
             context.lineTo(s,d);
             g = Math.floor(Math.random() * $(document).width());
             h = Math.floor(Math.random() * $(document).height());
             context.lineTo(g,h);
             context.lineWidth = 1;
             x[i] = a;
             y[i] = b;
             var z = new Array(100);
             }
        context.strokeStyle = '#fff';

        context.stroke();
        console.log('  X is  '+x+'  Y is  ' + x+ ' Z Is'+z);


    }


})();

        $('#canvas').css('background', '#000');



});
