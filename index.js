var listener = function(ev) {
  console.log("target:", ev.target, "relatedTarget:", ev.relatedTarget);
};

document.addEventListener('mouseover', listener, false);