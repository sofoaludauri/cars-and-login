var car1 = {
    brand: "bmw",
    model: "x6 m",
    year: 2020,
    price: 180000,
    currency: "$"
};

var car2 = {
    brand: "mercedes",
    model: "GLS",
    year: 2020,
    price: 76000,
    currency: "$"
}

var car3 = {
    brand: "tesla",
    model: " S 2.0",
    year: 2020,
    price: 79000,
    currency: "$"
}

var cars = [car1, car2, car3];

document.getElementById("title-1").innerHTML = `${car1.brand} - ${car1.model} - ${car1.price}${car1.currency}`;
document.getElementById("title-2").innerHTML = `${car2.brand} - ${car2.model} - ${car2.price}${car2.currency}`;
document.getElementById("title-3").innerHTML = `${car3.brand} - ${car3.model} - ${car3.price}${car3.currency}`;

function buy() {
    alert("ვერ შეიძენთ რადგან არ გაქვთ ავტორიზაცია გავლილი");
}

function findCar(id) {
    var car = undefined;
    for(var i = 0; i < cars.length; i++) {
        if(cars[i].brand == id) {
            car = cars[i];
        }
    }

    return car;
}

function details(el) {
    var id = el.parentNode.id;
    var car = findCar(id);
    alert(`მანქანის ფირმა: ${car.brand}, 
    მოდელი: ${car.model},
    გამოშვების წელი: ${car.year},
    ფასი: ${car.price} ${car.currency}`)
}

function showCheapest() {
    var cheapestCar = findCheapestCar();

    for(var i = 0; i < cars.length; i++) {
        if(cars[i].brand != cheapestCar.brand) {
            var elementi = document.getElementById(cars[i].brand);
            elementi.querySelector("button").disabled = true;
        }
    }
}

function findCheapestCar() {
    var carWithMinPrice = cars[0];
    for(var i = 0; i < cars.length; i++) {
        if(cars[i].price < carWithMinPrice.price) {
            carWithMinPrice = cars[i];
        }
    }

    return carWithMinPrice;
}

function showExpensivecar() {
    var ExpensiveCar = findExpensiveCar();

    for(var i = 0; i < cars.length; i++) {
        if(cars[i].brand != ExpensiveCar.brand) {
            var elementi = document.getElementById(cars[i].brand);
            elementi.querySelector("button").disabled = true;
        }
    }
}

function findExpensiveCar() {
    var carWithMaxPrice = cars[0];
    for(var i = 0; i < cars.length; i++) {
        if(cars[i].price > carWithMaxPrice.price) {
            carWithMaxPrice = cars[i];
        }
    }

    return carWithMaxPrice;
}
