function aaa() {
  console.log('aaa!');
}

var p = document.getElementById('abcd');
p.onclick = aaa;

p.onclick = function() {
  console.log('bbb!');
};