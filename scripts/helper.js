function generateNewItem(name, manu, price, image, date, stock) {
  const li = itemTemplate(name, manu, price, image, date, stock)
  const ul = document.querySelector("ul")
  ul.prepend(li)
}

function itemTemplate(name, manu, price, image, date, stock) {
  const li = document.createElement("li")
  li.classList.add("single-item")

  const removeButton = document.createElement("button")
  removeButton.textContent = "Remove Item"
  removeButton.addEventListener("click", (event) => {
    event.target.closest(".single-item").remove()
  })

  if (name && manu && price && date && stock) {
    
    let placeHolder = image
    if (!image){
      placeHolder = "./hoseb.png"
    }

    li.innerHTML = `<h3><img src="${placeHolder}" alt="${name} ${manu}" ></h3>
    <p><strong>Item Name</strong>: ${name}</p>
    <p><strong>Manufacturer</strong>: ${manu}</p>
    <p><strong>Price</strong>: $${price}</p>
    <p><strong>Order Date</strong>: ${date}</p>
    <button class="stock-check">${stock.options[stock.selectedIndex].textContent}</button>`
    li.append(removeButton)
  }

  return li
}

const listItems = document.querySelectorAll("li .remove-item")
for (item of listItems) {
  item.addEventListener("click", (event) => {
    event.target.closest(".single-item").remove()
  })
}

const itemInventory = document.querySelector("ul")

itemInventory.addEventListener("click", (event) => {
  if (event.target.classList.contains("stock-check")) {
    if (event.target.textContent === "In Stock") {
      event.target.textContent = "Out Of Stock"
      event.target.style.color = "red"
      event.target.style.backgroundColor = "gray"
    } else if (event.target.textContent === "Out Of Stock") {
      event.target.textContent = "In Stock"
      event.target.style.color = "green"
      event.target.style.backgroundColor = "white"
    }
  }
})