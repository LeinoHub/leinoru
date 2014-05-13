#Canavas generative

## 

Define canvas:
```Javascript
  var canvas = document.getElementById('canvas'),
  context = canvas.getContext('2d');
```
Make array for dots:
```Javascript 
  var x = new Array(10);
  var y = new Array(10);
```

Get cursor position:
```Javascript
$( document ).on( "mousemove", function( event ) {
  s = event.pageX;
  d = event.pageY;
});
```
Generate randome dots and join it with mouse cursor point:
```Javascript
for(var i=0; i < x.length; i++) {
     a = Math.floor(Math.random() * $(document).width());
     b = Math.floor(Math.random() * $(document).height());
     g = Math.floor(Math.random() * $(document).width());
     h = Math.floor(Math.random() * $(document).height());
     
     context.lineTo(a,b);
     context.lineTo(s,d); // (s, d) is a mouse position
     context.lineTo(g,h);
    }
```
