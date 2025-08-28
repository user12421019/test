var p = document.getElementsByTagName('p').item(0);

var style = document.defaultView.getComputedStyle(p, "::first-letter");
console.log(style.backgroundColor);