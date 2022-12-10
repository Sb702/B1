// // let x = 100;

let submitBtn = document.getElementById("coupon-submit");
let localBtn = document.getElementById("local-submit");

// console.log(localStorage.getItem("restaurantObj"))


// function createRestaurant() {
// let restaurant = {
//     couponsNames: [],
//     }
// }


// localStorage.clear();


// localStorage.setItem("Restaurant", restaurant.coupons);

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let value = document.getElementById("coupon-text").value

    restaurant.coupons.push(value);
    console.log(restaurant.coupons);
})



let rObject = localStorage.getItem("restaurantObj");
        let parsedObj = JSON.parse(rObject);
console.log(parsedObj);

localBtn.addEventListener('click', function() {
    if (localStorage.getItem("restaurantObj") === null) {
        let restaurant = {
            couponsNames: [],
        }
    let value = document.getElementById("coupon-text").value
    restaurant.couponsNames.push(value);
    localStorage.setItem("restaurantObj", JSON.stringify(restaurant));
    let rObject = localStorage.getItem("restaurantObj");
console.log((rObject));
console.log(JSON.parse(rObject));
let parsedObj = JSON.parse(rObject);
// console.log(parsedObj.couponsNames.length);


    } else if (localStorage.getItem("restaurantObj") != null) {
        // console.log(parsedObj.couponsNames.length);
        // let rObject = localStorage.getItem("restaurantObj");
        // let parsedObj = JSON.parse(rObject);


        // if (parsedObj.couponsNames.length <= 2) {
        //     console.log("coupon length < 2")
        // let rObject = localStorage.getItem("restaurantObj");
        // let parsedObj = JSON.parse(rObject);
        // }
        
        // let restaurant = {
        //     couponsNames: [],
        // }
        
        // console.log(parsedObj.couponsNames);

        let value = document.getElementById("coupon-text").value
        parsedObj.couponsNames.unshift(value);
        console.log(parsedObj.couponsNames)
        // restaurant.couponsNames.push(parsedObj.couponsNames);
        // localStorage.setItem("restaurantObj", JSON.stringify(restaurant));
        // console.log(parsedObj.couponsNames);
        // console.log(restaurant.couponsNames);
      }
})