document.addEventListener("DOMContentLoaded", () => {
    fetch("http:localhost:3000/paintings")
    .then(function (response) {
        return response.json()})
    .then(paintings => paintings.forEach(painting => createCardElement(painting)))
})

function createCardElement(painting) {
    let card = document.createElement("div")
    card.classList.add("card")

    let h2 = document.createElement("h2");
    h2.textContent = painting.name;

    let h3 = document.createElement("h3")
    h3.textContent = painting.artist;

    let img = document.createElement("img");
    img.src = painting.image;

    let p = document.createElement("p")
    p.textContent = painting.info

    card.append(h2, h3, img, p)
    document.getElementById("paintings").appendChild(card);
}

document.getElementById("close-btn").addEventListener("click", function() {
    document.getElementById("popup-1").classList.toggle("active");
})

document.getElementById("funFact").addEventListener("click", function() {
    document.getElementById("popup-1").classList.toggle("active");
})

document.getElementById("button").addEventListener("dblclick", function () {
    alert("Thanks For Visiting!")
})







