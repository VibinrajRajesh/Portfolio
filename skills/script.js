const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* Apply ScrollReveal to the timeline */
srtop.reveal('#Education .timeline', { delay: 300 });
srtop.reveal('#Education .containern', { interval: 300 });

/* Apply ScrollReveal to the timeline */
srtop.reveal('#Experience .timeline2', { delay: 300 });
srtop.reveal('#Experience .containern2', { interval: 300 });

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

srtop.reveal('#Skills',{delay:300});
srtop.reveal('#certify .card',{delay:300});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
