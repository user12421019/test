var newelement = document.createElement('p');
var newtextnode = document.createTextNode("新しいテキストノード");

newelement.appendChild(newtextnode);
document.body.appendChild(newelement);