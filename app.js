

 function addingItem () {

    var list = document.getElementById('itemList');

    var paragraph = document.createElement('p');
    paragraph.innerText = document.getElementById('nuName').value +' '+'[g]:';
    list.appendChild(paragraph);


    var element = document.createElement('li');
    list.appendChild(element);
    element.appendChild(paragraph);

    var input = document.createElement('input');
    input.type = 'text';
    input.className = "form-control veg";
    input.value = 0;
    element.appendChild(input);

}

document.getElementById('newItem').addEventListener('click', function() {

    var valItem = document.getElementById('nuName').value;
    if (valItem !== "") {
        addingItem();
    }
    else if (valItem === "") {
        alert("Enter your new ingriedent name");
    }
});






