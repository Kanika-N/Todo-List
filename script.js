function add_item() {
    let item = document.getElementById("box");
    let list_item = document.getElementById("list_item");

    if (item.value.trim() !== "") { 
        let make_li = document.createElement("li");
        let editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.style.marginLeft = "10px";
        make_li.appendChild(document.createTextNode(item.value));
        make_li.appendChild(editButton);
        list_item.appendChild(make_li);
        item.value = "";

        make_li.addEventListener("click", function() {
            this.parentNode.removeChild(this);
        });
        editButton.addEventListener("click", function(event) {
            event.stopPropagation(); 
            let newValue = prompt("Edit the item:", make_li.firstChild.textContent);
            if (newValue !== null && newValue.trim() !== "") {
                make_li.firstChild.textContent = newValue;
            }
        });
        
    } else {
        alert("Please add a value to the item");
    }
}