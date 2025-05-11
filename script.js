let itemInput = document.getElementById("itemInput");
let addItemButton = document.getElementById("addItemButton");
let removeItemButton = document.getElementById("removeItemButton");
let searchItemButton = document.getElementById("searchItemButton");
const listDisplay = document.getElementById("listDisplay");

let shoppingList = [];

//Task 1: Array Manipulation Basics

function displayList() {
  listDisplay.innerHTML = "";
  shoppingList.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    listDisplay.appendChild(li);
  });
}

function filterItems(searchTerm) {
  if (!searchTerm || typeof searchTerm !== "string") return [];

  const lowerSearchTerm = searchTerm.toLowerCase();
  return shoppingList.filter((item) =>
    item.toLowerCase().includes(lowerSearchTerm)
  );
}

function addItem(item) {
  if (!item || typeof item !== "string") {
    return "Wrong input.";
  }
  //The some() function returns true if any element satisfies the condition, otherwise it returns false.
  const exists = shoppingList.some(
    (i) => i.toLowerCase() === item.toLowerCase()
  );
  //Task 2: Filter and Search an Array
  if (!exists) {
    shoppingList.push(item);
    displayList();
  } else {
    alert("Item already exists");
    itemInput.value = "";
  }
}
function removeLastItem(item) {
  shoppingList.pop(item);
  displayList();
}

//add button

addItemButton.addEventListener("click", function () {
  let item = itemInput.value.trim();

  if (item === "") {
    alert("Please enter an item.");
    return;
  } else {
    addItem(item);
    itemInput.value = ""; // Clear the input field
  }
});

//remove button

removeItemButton.addEventListener("click", function () {
  removeLastItem();
  alert("last item from cart Removed");
});

//search button

searchItemButton.addEventListener("click", function () {
  const term = itemInput.value.trim();
        const results = filterItems(term);
        listDisplay.innerHTML = '';
        results.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            listDisplay.appendChild(li);
        });
});
