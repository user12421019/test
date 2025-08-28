var form = document.forms.item(0);

for (var i = 0; i < form.elements.length; i++) {
  console.log(form.elements[i].type);
}