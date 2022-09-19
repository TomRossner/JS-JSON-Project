let json_arr =[
    {
            name: "Bill Gates",
            worth: "$90B",
            birth_year:"1955",
            source:"Microsoft",
            country:"USA",
            image:"https://specials-images.forbesimg.com/imageserve/59d502f931358e542c034e76/200x200.jpg?background=000000&cropX1=245&cropX2=2420&cropY1=636&cropY2=2813"
       
        },
        {
           
            name:"Warren Buffett",
            worth:"$84B",
            birth_year:"1931",
            source:"Berkshire Hathaway",
            country:"USA",
            image:"https://specials-images.forbesimg.com/imageserve/59d5055931358e542c034ead/200x200.jpg?background=000000&cropX1=46&cropX2=693&cropY1=159&cropY2=806"
       
        },
        {
             
            name:"Mark Zuckerberg",
            worth:"$71B",
            birth_year:"1984",
            source:"Facebook",
            country:"USA",
            image:"https://specials-images.forbesimg.com/imageserve/59d5062131358e542c034eb7/200x200.jpg?background=000000&cropX1=419&cropX2=1409&cropY1=53&cropY2=1044"
       
        },
        {
           
            name:"Larry Ellison",
            worth:"$57B",
            birth_year:"1945",
            source:"Sun, Oracle",
            country:"USA",
            image:"https://specials-images.forbesimg.com/imageserve/59d5069b31358e542c034ec1/200x200.jpg?background=000000&cropX1=0&cropX2=2000&cropY1=227&cropY2=2228"
       
        },
        {
            
            name:"Michael Bloomberg",
            worth:"$50B",
            birth_year:"1942",
            source:"Bloomberg",
            country:"USA",
            image:"https://specials-images.forbesimg.com/imageserve/58c1d278a7ea431f321add1f/200x200.jpg?background=000000&cropX1=0&cropX2=744&cropY1=40&cropY2=784"
       
       }
]


const names = json_arr.map(obj => {
    return obj.name;
})
const worths = json_arr.map(obj => {
    return obj.worth;
})
const sources = json_arr.map(obj => {
    return obj.source;
})
const images = json_arr.map(obj => {
    return obj.image;
})


createCards();

function createCards(){
    const container = document.querySelector(".grid-container");
    for(let i = 0; i < json_arr.length; i++){
        const newCard = document.createElement("div");
        const cardImg = document.createElement("img");
        const cardName = document.createElement("h3");
        const cardWorth = document.createElement("p");
        const cardSource = document.createElement("p");
        newCard.className = "grid-item";
        cardName.className = "detail name";
        cardWorth.className = "detail worth";
        cardSource.className = "detail source";
        newCard.append(cardImg);
        newCard.append(cardName);
        newCard.append(cardWorth);
        newCard.append(cardSource);
        container.append(newCard);
        cardImg.setAttribute("src", images[i]);
        cardName.innerText = names[i];
        cardWorth.innerText = worths[i];
        cardSource.innerText = sources[i];

        newCard.addEventListener("click", function removeCard (){
            newCard.remove();
            json_arr.pop(newCard[i]);
        });
    }
}

