var p = document.getElementById('abcd');

var handler = function() {
  console.log('foo!');
  p.removeEventListener('click', handler, false);
};

p.addEventListener('click', handler, false);