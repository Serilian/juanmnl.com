$(function() {
  $("#screen .text").typed({
    strings: [
    "<span class='warning'>WARNING</span> ^1000",
    "^1000 System has been compromised ^1000",
    "^1000 <span class='danger'>***FATAL 3RR0R***</span><br>",
    "<span class='danger'>DANGER!!!</span> ^1000",
    "Installing Malware.................<br>...................................<br>...................................<br>...................................<br>...................................",
    "I'm just joking!<br> This site is under construction ^1000",
    "Contact me on twitter or github <br> <i>(with on of the buttons below)</i>"],
    contentType: 'html',
    typeSpeed: 2,
    backSpeed: 1,
    startDelay: 2000,
    loop: false
  });
});
