document.addEventListener("DOMContentLoaded", () => {
    fetch("http:localhost:3000/paintings")
    .then(response => response.json())
    .then(paintings => paintings.forEach(painting => createCardElement(painting)))
})

function createCardElement(painting) {
    let card = document.createElement("div")
    card.classList.add("card")

    let h2 = document.createElement("h2");
    h2.textContent = painting.name

    let h3 = document.createElement("h3")
    h3.textContent = painting.artist

    let img = document.createElement("img");
    img.src = painting.image;

    card.append(h2, h3, img)
    document.getElementById("paint-collection").appendChild(card);
}