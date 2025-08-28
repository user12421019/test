var p = document.getElementById('aaaaa');
var children = p.childNodes;

while (p.hasChildNodes()) {
  p.removeChild(children.item(0));
}