const hamburgerButton = document.querySelector(".hamburger-button")
const itemList = document.querySelector("#nav-links")

class car {
    constructor( make, model, year, description, price, picture){
        this.make = make
        this.model = model
        this.year = year
        this.description = description
        this.price = price
        this.picture = picture

    }
}
let car_list = [
    new car("Cadilac","CTS",2013,"",11264,""),
    new car("Toyota","Supra",1998,"",38222,""),
    new car("Chevrolet","Sonic",2015,"",5115,""),
    new car("BMW","480i",2020,"",52345,""),
    new car("Buick","Encore",2018,"",12980,""),
    new car("Mazda","Miata",1996,"",10496,"")

]

hamburgerButton.addEventListener("click", () =>{
    if (itemList.style.display === "none"){
        itemList.style.display = "block"
    }else {itemList.style.display = "none"}
})