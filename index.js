var p = document.getElementById('aaaaa');
var children = p.childNodes;
var textnode = children.item(0); 
console.log(textnode.nodeValue);
textnode.nodeValue = "書き換えました";
