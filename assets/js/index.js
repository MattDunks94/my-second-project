//Wait for the DOM to finish loading before starting list.
document.addEventListener('DOMContentLoaded', function () {

    //Getting the 'start planning' h2 element.
    let startBtn = document.getElementById('startBtn');
    startBtn.addEventListener('click', startList);

    //Getting the welcome area and list area elements.
    let welcomeArea = document.getElementById('welcome');
    let listArea = document.getElementById('listContainer');

    /**
     * Adding class 'hidden' to startBtn and welcomeArea.
     * This sets the display to 'none' to both elements when startBtn is clicked on, 
     * and at same time removes 'hidden' class from listArea element and reveals element.
     * Also added 'focus()' method for when listArea elements are revealed,
     * sets the input 'box' active, ready for the user to type in.
     */
    function startList() {
        startBtn.classList.add('hidden');
        welcomeArea.classList.add('hidden');
        listArea.classList.remove('hidden');
        document.getElementById('box').focus();
    };
})

/**
 * Getting the 'add item' button and adding event listener.
 * Added function that creates new element (list item) 
 * when user clicks 'add item' button.
 * Also set input 'box' value to empty string, resets after every 
 * added activity.
 */
let addButton = document.getElementById('addItemBtn');
addButton.addEventListener("click", function addItem() {

    let newItem = document.createElement('div');
    newItem.innerHTML = document.getElementById('box').value;
    document.getElementById('list-container').appendChild(newItem);
    newItem.className = "new-item";
    document.getElementById('box').value = '';

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

    let selectTime = document.createElement('input');
    selectTime.type = 'time';
    selectTime.className = 'select-time-box';
    newItem.appendChild(selectTime);
});

//Added 'keypress' event to add new item.
document.getElementById('box').addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addButton.click();
    };
});

//Added time input for when new item is added.
let selectTime = document.createElement('input');
newItem.appendChild(selectTime);