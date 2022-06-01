//Getting the 'add item' button and adding event listener function.
let addButton = document.getElementById('addItemBtn');
addButton.addEventListener("click", function addItem() {
    let newItem = document.createElement('div');
    newItem.innerHTML = document.getElementById('box').value;
    document.getElementById('list-container').appendChild(newItem);
    newItem.className = "new-item"
});



