let capture;
let isVisible = true;
let isFullscreen = false;

function setup() {
  capture = createCapture(VIDEO);
  capture.size(300, 300 * (9/16));

  capture.elt.classList.add("video_capture");
  capture.elt.style.width="300px"
  capture.elt.style.height="auto"
  noCanvas();
}

function keyPressed() {
  if (keyCode === 81) {
    isVisible = !isVisible;
    if ( isVisible ) {
      capture.play();
      capture.elt.style.display="block";
    } else {
      capture.pause();
      capture.elt.style.display="none";
    }
  }

  if ( keyCode === 87 ) {
    isFullscreen = !isFullscreen;
    goFullScreen( isFullscreen );
  }
}

function goFullScreen( isFullscreen ) {
  if ( isFullscreen ) {
    capture.elt.style.width="100%"
    capture.elt.style.height="calc(100% - 10px)"
  } else {
    capture.elt.style.width="300px"
    capture.elt.style.height="auto"
  }
}
