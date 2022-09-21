let richPeople = json_arr;
const container = document.querySelector(".grid-container");

function createCards(array){
    let mediaQuery1280px1550px = window.matchMedia('(min-width: 1281px) and (max-width: 1550px)');
    // let mediaQuery1280px1550px = window.matchMedia('(min-width: 1281px) and (max-width: 1550px)');
    if(mediaQuery1280px1550px && array.length === 5){
        // addGridItemProperty()
        console.log("yes")
    }


    container.innerHTML = "";
    array.map(people => {
        const newCard = document.createElement("div");
        const cardImg = document.createElement("img");
        const cardName = document.createElement("h3");
        const cardWorth = document.createElement("p");
        const cardSource = document.createElement("p");
        newCard.className = "grid-item";
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

function removeCard(event){
    const card = event.target.closest("[data-name]").dataset.name;
    richPeople = richPeople.filter((people) => people.name !== card);
    console.log(richPeople)
    console.log(card)
    createCards(richPeople)
}

createCards(richPeople);