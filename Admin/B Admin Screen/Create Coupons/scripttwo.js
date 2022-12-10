let submitBtn = document.getElementById("coupon-submit");
let localBtn = document.getElementById("local-submit");

// if (localStorage.getItem("restaurantObj") === null) {
//     console.log("good");
//     let restaurant = {
//         couponsNames: [],
//     }

            // LOCAL BUTTON JAVASCRIPT
localBtn.addEventListener('click', function() {
    // if (localStorage.getItem("restaurantObj") === null) {
        // console.log("good");
        let restaurant = {
            couponsNames: [],
        }

        if (localStorage.getItem("restaurantObj") != null) {
            console.log("eialuflieafhl");
            let rObject = localStorage.getItem("restaurantObj");
            // console.log((rObject));
            // console.log(JSON.parse(rObject));
            let parsedObj = JSON.parse(rObject);
            console.log(parsedObj)
            console.log(parsedObj.couponsNames);

            let value = document.getElementById("coupon-text").value
            restaurant.couponsNames.push(value);
            console.log(restaurant.couponsNames);

for (let i = 0; i < parsedObj.couponsNames.length; i++) {
restaurant.couponsNames.push(parsedObj.couponsNames[i]);
}
            console.log(restaurant);
            localStorage.setItem("restaurantObj", JSON.stringify(restaurant));
            return;
    }


    // console.log("return didn't work")

    let value = document.getElementById("coupon-text").value
    restaurant.couponsNames.push(value);
    console.log(restaurant.couponsNames);
    localStorage.setItem("restaurantObj", JSON.stringify(restaurant));
    let rObject = localStorage.getItem("restaurantObj");
console.log((rObject));
console.log(JSON.parse(rObject));
let parsedObj = JSON.parse(rObject);

// } 
    
    // else if ((localStorage.getItem("restaurantObj") != null)) {
    //     console.log("felkafnkalew");
    //     let rObject = localStorage.getItem("restaurantObj");
    //             console.log((rObject));
    //             console.log(typeof(rObject));
    //             console.log(JSON.parse(rObject));
    //     let parsedObj = JSON.parse(rObject);
    //             console.log((parsedObj.couponsNames));
        
    //     let value = document.getElementById("coupon-text").value
    //     parsedObj.couponsNames.push(value);
    //     console.log((parsedObj.couponsNames))
    //     console.log(JSON.parse(rObject));
    //     // localStorage.setItem("restaurantObj", JSON.stringify(restaurant));
    // }
})