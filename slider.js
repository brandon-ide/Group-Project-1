
class Car {
    constructor(make, model, year, description, price, picture) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.description = description;
        this.price = price;
        this.picture = picture;
    }
}

let carList = [
    new Car("Cadillac", "CTS", 2013, "Luxurious and comfortable", 11264, "Assets/Cars/Cadillac.jpg"),
    new Car("Toyota", "Supra", 1998, "Sporty and fast", 38222, "Assets/Cars/Toyota.jpg"),
    new Car("Rivian", "R1T", 2001, "Electric SUV", 5115, "Assets/Cars/Rivian.png"),
    new Car("BMW", "480i", 2020, "High performance", 52345, "Assets/Cars/BMW-Front.jpg"),
    new Car("Buick", "Encore", 2018, "Stylish and modern", 12980, "Assets/Cars/Buick.jpg"),
    new Car("Mazda", "Miata", 1996, "Fun and sporty", 10496, "Assets/Cars/Mazda.jpg"),
    new Car("Chevrolet", "Blazer", 2020, "Spacious SUV", 29995, "Assets/Cars/Blazer.jpg"),
    new Car("Porsche", "911 GT3", 2024, "Luxury sports car", 182000, "Assets/Cars/Porsche.jpg"),
    new Car("AM General", "Humvee", 2000, "Tough & Rugged", 18000, "Assets/Cars/Humvee.png"),
    new Car("Ford", "Ford GT", 2022, "Luxury sports car", 251000, "Assets/Cars/Ford-GT.png"),
    new Car("Batman", "Batmobile", 1989, "I am Batman!", 1500000, "Assets/Cars/Batmobile.png")
];

const cartItems = [];

const displayCars = () =>{
    let carContainer = document.getElementById("container");
    if(carContainer) {
        carList.forEach(car => {
            let carDiv = document.createElement("div");
            carDiv.classList.add("slide");
    
            carDiv.innerHTML = `
                <img src="${car.picture}" alt="${car.make}" width="330">
                <h2>${car.make} ${car.model} (${car.year})</h2>
                <p class="price">$${car.price.toLocaleString()}</p>
                <p>${car.description}</p>
                <p><button id="addToCart" onclick='addToCart(${JSON.stringify(car)})'>Add to Cart</button></p>
            `;
            carContainer.appendChild(carDiv);
        });
    }
}




const updateSubTotalDue = () => {
    document.getElementById("subtotal").innerHTML = `Subtotal: $${getSubTotalCartPrice(cartItems).toLocaleString()}`;
};
const getSubTotalCartPrice = (cartItems) => {
    return cartItems.reduce((total, car) => total + car.price, 0);
}

const updateSalesTax = () => {
    document.getElementById("salesTax").innerHTML = `Sales Tax: $${getSalesTax(cartItems).toLocaleString()}`;
};

const getSalesTax = (cartItems) => {
    return cartItems.reduce((total, car) => total + car.price * .06, 0);
}

const updateTotalDue = () => {
    document.getElementById("totalDue").innerHTML = `Total Due: $${getTotalDue(cartItems).toLocaleString()}`;
};

const getTotalDue = (cartItems) => {
    return cartItems.reduce((total, car) => total + car.price * .06 + total + car.price, 0);
}

displayCars();

const addToCart = (car) => {
    cartItems.push(car)
    alert(`${car.make} ${car.model} added to cart!`);
    console.log(cartItems)
    updateSubTotalDue();
    updateSalesTax();
    updateTotalDue();
}

const displayCart = () =>{
    let cartContainer = document.getElementById("cartContainer");
    cartContainer.innerHTML = '';

        cartItems.forEach(car => {
            let carDiv = document.createElement("div");
            carDiv.classList.add("slide");
        
            carDiv.innerHTML = `
                <img src="${car.picture}" alt="${car.make}" width="330">
                <h2>${car.make} ${car.model} (${car.year})</h2>
                <p class="price">$${car.price.toLocaleString()}</p>
                <p>${car.description}</p>
                `;
            
            cartContainer.appendChild(carDiv);
        });
}

// Get modal element
const modal = document.getElementById("myModal");

// Get the button that triggers the modal
const triggerModalButton = document.getElementById("triggerModalButton");

// Get close button
const closeButton = document.querySelector(".close-button");

// Function to open the modal
const openModal = () => {
    displayCart();
    modal.style.display = "block";
}

// Function to close the modal
const closeModal = () => {
    modal.style.display = "none";
}

// Event listener for the trigger button
triggerModalButton.addEventListener("click", openModal);

// Event listener for the close button
closeButton.addEventListener("click", closeModal);

// Close modal when clicking outside of the modal content
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

function toggleOption(option) {
    if (option === 'cash') {
        cashMath.style.display = "block";
        creditCard.style.display = "none";
    } else if (option === 'credit') {
        creditCard.style.display = "block";
        cashMath.style.display = "none";
    }
}

function changeDue() { //STILL WORKING ON THIS FUNCTION
    let cashPayed = document.getElementById("customerCash").value;
    let carPrice = document.getElementById("totalDue").innerHTML.value;
    let result = cashPayed - carPrice;
    document.getElementById('result').innerHTML = 'Change Due Back: ' + result;
}


