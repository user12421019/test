var table = document.getElementById('aaaaa');

var tbody = table.tBodies.item(0);

var newtr = tbody.insertRow(0);

for (var i = 0; i < 2; i++) {
  var newtd = newtr.insertCell(newtr.cells.length);
  newtd.appendChild(document.createTextNode('testtest' + i));
}