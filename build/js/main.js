$(function() {
  $("#screen .text").typed({
    strings: [
    "Hello there! ^1000",
    "^1000 Welcome to my website ^1000",
    "^1000 This is a work in progress for an UI* research<br><i>*UI - User interface</i>^1000",
    "(This site is under development and can behave erratically) ^1000",
    "If you want to get in touch, ^500 please use the buttons below. ^1000",
    "Or throw me an email juanmnl@me.com :)"],
    contentType: 'html',
    typeSpeed: 1,
    backSpeed: 2,
    startDelay: 2000,
    loop: false
  });
});
