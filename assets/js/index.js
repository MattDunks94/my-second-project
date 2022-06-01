/**
 * Getting the 'add item' button and adding event listener.
 * Added function that creates new element (list item) 
 * when user clicks 'add item' button.
 */
let addButton = document.getElementById('addItemBtn');
addButton.addEventListener("click", function addItem() {

    let newItem = document.createElement('div');
    newItem.innerHTML = document.getElementById('box').value;
    document.getElementById('list-container').appendChild(newItem);
    newItem.className = "new-item";

    /**
     * Adding remove button when user adds item.
     * add event listener to newly created button
     * which, when clicked, removes new item.
     */
    let removeBtn = document.createElement('button');
    newItem.appendChild(removeBtn);
    removeBtn.className = 'remove-btn';
    removeBtn.innerHTML = 'X';
    removeBtn.addEventListener('click', function removeItem() {
        document.getElementById('list-container').removeChild(newItem);
    });
});




