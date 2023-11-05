const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const { name, manu, price, image, date, stock } = event.target
    generateNewItem(name.value, manu.value, price.value, image.value, date.value, stock)

    form.reset()
})