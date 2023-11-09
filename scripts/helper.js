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
    if (!image) {
      placeHolder = "./hoseb.png"
    }

    li.innerHTML = `<h3><img src="${placeHolder}" alt="${name} ${manu}"></h3>
    <p><span class="bold">Item Name</span >: ${name}</p>
    <p><span class="bold">Manufacturer</span >: ${manu}</p>
    <p><span class="bold">Price</span >: $${price}</p>
    <p><span class="bold">Order Date</span >: ${date}</p>
    <button class="stock-check">${stock.options[stock.selectedIndex].textContent}</button>`
    li.append(removeButton)

    const stockButton = li.querySelector('.stock-check')
    if (stockButton.textContent === 'In Stock') {
      stockButton.classList.add('in-stock')
    } else if (stockButton.textContent === 'Out Of Stock') {
      stockButton.classList.add('out-stock')
    }
  }

  return li
}

const listItems = document.querySelectorAll(".remove-item")
for (item of listItems) {
  item.addEventListener("click", (event) => {
    event.target.closest(".single-item").remove()
  })
}

const itemInventory = document.querySelector("ul")

itemInventory.addEventListener("click", (event) => {
  let button = event.target
  if (button.classList.contains("stock-check")) {
    if (button.textContent === "In Stock") {
      button.textContent = "Out Of Stock"
      button.style.color = "red"
      button.style.backgroundColor = "gray"
    } else if (button.textContent === "Out Of Stock") {
      button.textContent = "In Stock"
      button.style.color = "green"
      button.style.backgroundColor = "white"
    }
  }
})
