let richPeople = json_arr;
const container = document.querySelector(".flex-container");

const createCards = () => {
    container.innerHTML = "";
    if (!richPeople.length) {
        container.innerHTML = `No data`;
        container.style.fontSize = "2rem";
        container.style.fontStyle = "italic";
        container.style.color = "rgba(200, 200, 200, 0.2)";
        container.style.flexDirection = "column";
        const reloadBtn = document.createElement("button");
        reloadBtn.className = "reload-button";
        reloadBtn.innerText = "Reload Page";
        reloadBtn.style.display = "block";
        container.appendChild(reloadBtn);
        reloadBtn.addEventListener("click", () => window.location.reload());
    }
    else richPeople.map((people) => {
        const newCard = document.createElement("div");
        const cardImg = document.createElement("img");
        const cardName = document.createElement("h3");
        const cardWorth = document.createElement("p");
        const cardSource = document.createElement("p");
        newCard.className = "flex-item";
        cardName.className = "detail name";
        cardWorth.className = "detail worth";
        cardSource.className = "detail source";
        newCard.appendChild(cardImg);
        newCard.appendChild(cardName);
        newCard.appendChild(cardWorth);
        newCard.appendChild(cardSource);
        container.appendChild(newCard);
        cardImg.setAttribute("src", people.image);
        cardName.innerText = people.name;
        cardWorth.innerText = people.worth;
        cardSource.innerText = people.source;
        newCard.dataset.name = people.name;
    
        newCard.addEventListener("click", (e) => removeCard(e));
    })
}

const removeCard = (event) => {
    const card = event.target.closest("[data-name]").dataset.name;
    richPeople = richPeople.filter((people) => people.name !== card);
    createCards();
}

createCards();