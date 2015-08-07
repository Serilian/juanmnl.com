$(function () {
  $("#screen .text").typed({
    strings: [
      '<small><span class="warning">**This site is under development**</span></small>',
      'Hello there!^1000',
      'How are you?^1000',
      '^1000 My name is Juan Manuel Cornejo and i\'m a frontend designer/engineer^2500',
      'This are some of the things i do^1000',
      '^500 - RESEARCH and DEVELOPMENT^1000<br> ^500 - UI ENGINEERING <i><small>(User interface)</small></i>^1000<br> ^500 - UX DESIGN <i><small>(User experience)</small></i>^1000<br> ^500 - PRODUCT DESIGN^1000 <br> ^500 - PROTOTYPE DEVELOPMENT^1000<br> ^500 - WEB and MOBILE CONSULTING^1500',
      '^1000 This is an actual work-in-progress for an UI research i\'m working on^1500',
      'If you want to get in touch,^500 please use one of the buttons below^500',
      'Or throw me an email juanmnl@me.com^3000<br>Thank you for stopping by!^500<br>:)^1000<br> – Juanmnl'],
    contentType: 'html',
    typeSpeed: 5,
    backSpeed: 3,
    startDelay: 3000,
    loop: false
  });
});
