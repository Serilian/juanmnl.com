$(function() {
  $("#screen .text").typed({
    strings: ["<span class='danger'>WARNING!</span> ^1000", "^500 The system has been compromised ^1000", "^1000 <span class='danger'>– ACCESS DENIED –</span> <br> ^1000", "<span class='danger'>WARNING!</span> ^1000", "Installing Malware.................<br>................................... <br>................................... <br>................................... <br>................................... <br>................................... <br>................................... ^1000", "I'm just joking!<br> This site is under construction ^1000", "Throw me an email to juanmnl@me.com<br> if you want to ask me something ^5000" ],
    contentType: 'html',
    typeSpeed: 5,
    startDelay: 3000,
    loop: true
  });
});
