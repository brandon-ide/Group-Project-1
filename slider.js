
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
    new Car("Batman", "Batmobile", 1989, "I am Batman!", 1500000, "Assets/Cars/Batmobile.png"),
    new Car("Space", "Ghost", 1965, "Coast to Coast", 200000, "Assets/Cars/Space Ghost.png")
];

const cartItems = [];

const displayCars = () =>{
    let carContainer = document.getElementById("container");
    if(carContainer) {
        carList.forEach(car => {
            let carDiv = document.createElement("div");
            carDiv.classList.add("slide");
            carDiv.classList.add("card");
    
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

const togglePaymentMethod = () => {
    const receiptDiv = document.getElementById("receipt");
    receiptDiv.style.display = "none";

    document.getElementById("cashInput").value = '';
    document.getElementById("cardNumber").value = '';
    document.getElementById("expiration").value = '';
    document.getElementById("cvv").value = '';

    const creditCardInput = document.getElementById("card");
    const cashInput = document.getElementById("cash");

    const creditCardDiv = document.getElementById("creditCard");
    const cashMathDiv = document.getElementById("cashMath");

    if (creditCardInput.checked) {
        creditCardDiv.style.display = "block"; // Show credit card section
        cashMathDiv.style.display = "none"; // Hide cash section
    } else if (cashInput.checked) {
        creditCardDiv.style.display = "none"; // Hide credit card section
        cashMathDiv.style.display = "block"; // Show cash section
    }
};

const tenderCash = () => {
    const cashInput = document.getElementById("cashInput");
    const cashAmount = parseFloat(cashInput.value).toFixed(2);
    
    const total = getTotalDue(cartItems).toFixed(2);

    const changeDue = (cashAmount - total).toFixed(2);

    const receiptDiv = document.getElementById("receipt");
    receiptDiv.style.display = "block";

    document.getElementById("itemCount").innerHTML = `${cartItems.length}`;
    document.getElementById("paid").innerHTML = `$${cashAmount}`;
    document.getElementById("total").innerHTML = `$${total}`;
    document.getElementById("change").innerHTML = `$${changeDue}`;
};

const tenderCredit = () => {  
    const total = getTotalDue(cartItems).toFixed(2);
    const receiptDiv = document.getElementById("receipt");
    receiptDiv.style.display = "block";

    const cardInfoDiv = document.getElementById("cardInfo");
    cardInfoDiv.style.display = "block";
    const cardNumberInput = document.getElementById("cardNumber");
    const lastFourDigits = cardNumberInput.value.slice(-4);

    document.getElementById("itemCount").innerHTML = `${cartItems.length}`;
    document.getElementById("paid").innerHTML = `$${total}`;
    document.getElementById("total").innerHTML = `$${total}`;
    document.getElementById("change").innerHTML = `$0.00`;
    document.getElementById("lastFour").innerHTML = `XXXX-XXXX-XXXX-${lastFourDigits}`;
};


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

