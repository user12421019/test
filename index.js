var stylesheet = document.styleSheets[0];

var ele = stylesheet.ownerNode;
ele.parentNode.removeChild(ele);