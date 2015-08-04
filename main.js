$(function() {
  $("#screen .text").typed({
    strings: ["<span class='danger'>WARNING!</span> ^1000", "^500 The system has been compromised ^1000", "^1000 Virus is spreading ^1000" ],
    contentType: 'html',
    typeSpeed: 5,
    startDelay: 3000,
    loop: true
  });
});
