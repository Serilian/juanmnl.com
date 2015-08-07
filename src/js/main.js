$(function () {
  $("#screen .text").typed({
    strings: [
      '<small><span class="warning">**This site is under development**</span></small>',
      'Hello there! ^1000',
      '^1000 My name is Juan Manuel Cornejo<br>and i\'m a frontend engineer. ^2500',
      'This are some of the things i do ^1000',
      '^500 RESEARCH and DEVELOPMENT ^500',
      '^500 UI ENGINEERING <i><small>(User interface)</small></i> ^500',
      '^500 UX DESIGN <i><small>(User experience)</small></i> ^500',
      '^500 PRODUCT DESIGN ^500',
      '^500 PROTOTYPING ^500',
      '^500 WEB and MOBILE ^500',
      '^1000 This is an actual work-in-progress for an UI* research i\'m working on ^1000',
      'If you want to get in touch, ^500 please use one of the buttons below.',
      'Or throw me an email juanmnl@me.com<br> ^3000 Bye :)'],
    contentType: 'html',
    typeSpeed: 3,
    backSpeed: 3,
    startDelay: 3000,
    loop: false
  });
});
