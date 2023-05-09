document.addEventListener("DOMContentLoaded", () => {
    fetch("http:localhost:3000/paintings")
    .then(response => response.json())
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

    let button = document.createElement("button")
    button.textContent= "More Info"
    button.id = painting.id

    card.append(h2, h3, img, p, button)
    document.getElementById("paint-collection").appendChild(card);
}

document.querySelector("#funFact").addEventListener("click", () => alert("The collection of the Art Institute of Chicago covers more than 5,000 years of human expression from cultures around the world. The museum owns more than 260,000 works of art. The art institute holds works of art ranging from as early as the Japanese prints to the most updated American art."))




