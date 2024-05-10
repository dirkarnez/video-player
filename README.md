video-player
============
- [ ] [Manipulating video using canvas - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [ ] Coarse / Fine timeline
- [ ] [Time range](https://github.com/dirkarnez/video-player/blob/main/index.html#L108)


### New control
```html
<!DOCTYPE html>
<html>


<body>
<h1>HTML DOM Events</h1>
<h2>The onmousemove Event</h2>

<div style="width: 100%; height: 10px; border: 1px solid black; display: flex; align-items: center; justify-content: center;" onclick="myFunction(event)" onmouseout="clearCoor()">
<div style="height: 100%; width: 10px; background: blue"></div>
</div>

<p>Mouse over the rectangle above, and get the coordinates of your mouse pointer.</p>

<p>When the mouse is moved over the div, the p element will display the horizontal and vertical coordinates of your mouse pointer, whose values are returned from the clientX and clientY properties on the 
MouseEvent object.</p>

<p id="demo"></p>

<script>
function myFunction(e) {
// -1 to 1
document.getElementById("demo").innerHTML = `${(((e.offsetX / e.target.clientWidth) - 0.5) * 2) * 5}`;
}

function clearCoor() {
  document.getElementById("demo").innerHTML = "";
}
</script>

</body>
</html>
```
