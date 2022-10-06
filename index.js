let count = 0;
let screen = document.querySelector("#screen");
let screenEditing = document.querySelector("#screen-editing");
let summaryPrice = document.querySelector("#summary-Price");
let NameForAdding = document.getElementById("input");
let PriceForAdding = document.getElementById("Price-field");
let NumberForAdding = document.getElementById("Number-field");
let nameF = document.getElementById("Name-field");

let PriceForEditing = document.getElementById("Price-edit-field");
let NumberForEditing = document.getElementById("Number-edit-field");
let NameForEditing = document.getElementById("Name-edit-field");
let homeContent = document.getElementById("home-content");
let addingContent = document.getElementById("adding-content");
let editingContent = document.getElementById("editing-content");
let CurScreen = screen;
let elements = -1;


function findByName(arrayOfHotels){
    destroyEl();
    let Name = NameForAdding.value;
    NameForAdding.value = "";
    destroyAll();
    newArray = arrayOfHotels.filter((item)=>{return item.Name === Name});
    printHotels(newArray);
}

function sortByPrice(arrayOfHotels){
    destroyEl();
    arrayOfHotels.sort((a, b) => {
        return a.price - b.price;
    });
    destroyAll()
    printHotels(arrayOfHotels);
}

function destroyEl(){
    if (summaryPrice !== null) {
        summaryPrice.style.display = "none";
    }
}

function countByPrice(arrayOfHotels){
    let c =  arrayOfHotels.reduce((res, element) => {
        return res + element.Price;
    }, 0);
    if (summaryPrice.style.display === "none") {
        summaryPrice.style.display = "block";
        if (count === 0) {
            summaryPrice.insertAdjacentHTML("afterbegin", `
            <div><h4> Summary Price of Hotels: ${c} </h4></div>`);
            ++ count;
        }
    }else{
        console.log("Destroy");
        destroyEl();
    }
}

function addingToForm(el){
    PriceForEditing.value = arrayOfHotels[el].Price;
    NumberForEditing.value = arrayOfHotels[el].price;
    NameForEditing.value = arrayOfHotels[el].Name;
    elements = el;
}

function changeObject(){
    if (elements === -1){
        alert("U dump fuck");
        return;
    }
    let Price = PriceForEditing.value;
    let Number = NumberForEditing.value;
    let Name = NameForEditing.value;
    if ( Price.length === 0 || Number.length === 0 || Name.length === 0){
        alert("U stupid!");
    }else{
        if (parseInt(Price) < 0 || parseInt(Number) < 0){
            alert("Fuck off!");
        }else{
            PriceForEditing.value = "";
            NumberForEditing.value = "";
            NameForEditing.value = "";
            alert("Nice");
            arrayOfHotels[elements] = new Hotels( parseInt(Price), parseInt(Number), Name);
            reset();
        }
    }
    elements = -1;
}

function printHotels(arrayOfHotels){
    if (arrayOfHotels.length === 0){
        let div = document.createElement("div");
        div.insertAdjacentHTML("afterbegin", `
            <div><h4> No data :( </h4></div>`);
        div.style.margin = "auto";
        div.style.width = "max-content";
        CurScreen.appendChild(div);
        return;
    }
    let el = 0;
    for (let element of arrayOfHotels){
        let div = document.createElement("div");
        if (editingContent.style.display !== "none"){
            div.id = "filling-" + (el ++);
        }
        div.innerHTML = `
            <table>
                <tr>
                    <td>Price: </td>
                    <td>${element.Price}</td>
                </tr>
                <tr>
                    <td>Number of Lamps: </td>
                    <td>${element.price}</td>
                </tr>
                <tr>
                    <td>Name of Creator: </td>
                    <td>${element.Name}</td>
                </tr>
            </table>
        `;
        CurScreen.appendChild(div);
 }
    if (editingContent.style.display !== "none"){
        for (let i=0; i<el; ++ i){
            let div = document.querySelector("#filling-" + i);
            div.addEventListener('click', (event)=>{
                addingToForm(i);
            });
        }
    }
}

function destroyAll(){
    count = 0;
    while(CurScreen.firstChild){
        CurScreen.removeChild(CurScreen.lastChild);
    }
    if (homeContent.style.display !== "none"){
        screen.insertAdjacentHTML("afterbegin", `<section style="display: none; width: max-content; margin: auto;" id = "summary-Price">
        </section>`);
    }
    summaryPrice = document.querySelector("#summary-Price");
}

function reset(){
    newArray = [...arrayOfHotels];
    destroyAll();
    printHotels(newArray);
}

function validateInput(){
    let Price = PriceForAdding.value;
    let Number = NumberForAdding.value;
    let Name = nameF.value;
    if ( Price.length === 0 || Number.length === 0 || Name.length === 0){
        alert("All fields must be non-empty!");
    }else{
        if (parseInt(Price) < 0 || parseInt(Number) < 0){
            alert("Price and Number of lamps must be a positive integer!");
        }else{
            PriceForAdding.value = "";
            NumberForAdding.value = "";
            nameF.value = "";
            alert("Hotels was added successfully!");
            arrayOfHotels.push(new Hotels( parseInt(Price), parseInt(Number), Name));
        }
    }
}

function goHome(){
    homeContent.style.display = "flex";
    addingContent.style.display = "none";
    editingContent.style.display = "none";
    CurScreen = screen;
    reset();
}

function goAdd(){
    homeContent.style.display = "none";
    addingContent.style.display = "block";
    editingContent.style.display = "none";
}

function goEdit(){
    homeContent.style.display = "none";
    addingContent.style.display = "none";
    editingContent.style.display = "flex";
    CurScreen = screenEditing;
    elements = -1;
    reset();
}

class Hotels{
    constructor(Price, price, Name){
        this.Price = Price;
        this.price = price;
        this.Name = Name;
    }

    toString(){
        return "  Price: " + this.Price + " <p> Number of Rooms: " +
            this.price + " <p> Name: " + this.Name + "}";
    }
}

let arrayOfHotels = [
    new Hotels( 13, 777, "Cal"),
    new Hotels( 3, 1, "If"),
    new Hotels(777, 0, "Or"),
    new Hotels( 113, 999, "Ni"),
    new Hotels( 666, 888, "A"),
];

let newArray = [...arrayOfHotels];

goHome();