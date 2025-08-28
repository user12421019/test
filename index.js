var a = document.createElement('a');
a.href = "http://www.google.com/";

var textnode = document.createTextNode("Google");
a.appendChild(textnode);

var p = document.getElementById('aaaaa');
p.insertBefore(a, p.firstChild);