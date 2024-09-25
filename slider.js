let container = document.getElementById('container');
let slider = document.getElementById('slider');

let slides = document.getElementsByClassName('slide').length;
let buttons = document.getElementsByClassName('btn');

let currentPosition = 0;
let currentMargin = 0;
let slidesPerPage = 0;
let slidesCount = slides - slidesPerPage;
let containerWidth = container.offsetWidth;
let prevKeyActive = false;
let nextKeyActive = true;

window.addEventListener('resize', checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 551) {
        slidesPerPage = 1;
    } else {
        if (w < 901) {
            slidesPerPage = 2;
        } else {
            if (w < 1101) {
                slidesPerPage = 3;
            } else {
                slidesPerPage = 4;
            }
        }
    }
    slidesCount = slides - slidesPerPage;
    if (currentPosition > slidesCount) {
        currentPosition -= slidesPerPage;
    };
    currentMargin = - currentPosition * (100 / slidesPerPage);
    slider.style.marginLeft = currentMargin + '%';
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
    if (currentPosition >= slidesCount) {
        buttons[1].classList.add('inactive');
    }
};

setParams();

function slideRight() {
    if (currentPosition != 0) {
        slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
        currentMargin += (100 / slidesPerPage);
        currentPosition--;
    };
    if (currentPosition === 0) {
        buttons[0].classList.add('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
};

function slideLeft() {
    if (currentPosition != slidesCount) {
        slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
        currentMargin -= (100 / slidesPerPage);
        currentPosition++;
    };
    if (currentPosition == slidesCount) {
        buttons[1].classList.add('inactive');
    }
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
};

//end slider funtionality

function menu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


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
    new Car("Chevrolet", "Sonic", 2015, "Compact and affordable", 5115, "Assets/Cars/Chevrolet.jpg"),
    new Car("BMW", "480i", 2020, "High performance", 52345, "Assets/Cars/BMW.jpg"),
    new Car("Buick", "Encore", 2018, "Stylish and modern", 12980, "Assets/Cars/Buick.jpg"),
    new Car("Mazda", "Miata", 1996, "Fun and sporty", 10496, "Assets/Cars/Mazda.jpg"),
    new Car("Chevrolet", "Blazer", 2020, "Spacious SUV", 29995, "Assets/Cars/Blazer.jpg"),
    new Car("Porsche", "911 GT3", 2024, "Luxury sports car", 182000, "Assets/Cars/Porsche.jpg"),
];

let carContainer = document.getElementById("car-container");

carList.forEach(car => {
    let carDiv = document.createElement("div");
    carDiv.classList.add("slide", "card");

    carDiv.innerHTML = `
        <img src="${car.picture}" alt="${car.make}" width="330">
        <h2>${car.make} ${car.model} (${car.year})</h2>
        <p class="price">$${car.price.toLocaleString()}</p>
        <p>${car.description}</p>
        <p><button>Add to Cart</button></p>
    `;
    
    carContainer.appendChild(carDiv);
});



//Shopping cart funcitonality
// //First we check if we're on the page that needs to add content to the cart.
// const addToCartButton = document.getElementById('addToCart');

// if (addToCartButton) {
//     addToCartButton.addEventListener('click', function() {
//         /*const itemPrice = 50;
        
//         localStorage.setItem('totalPrice', itemPrice);
        
//         window.location.href = 'checkout.html';*/
//     });
// }

// const totalPriceElement = document.getElementById('totalPrice');

// if (totalPriceElement) {
//     const storedPrice = localStorage.getItem('totalPrice');

//     totalPriceElement.textContent = storedPrice ? `$${storedPrice}` : 'No items in cart';
