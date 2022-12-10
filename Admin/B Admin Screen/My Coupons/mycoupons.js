let localTxt = document.getElementById("local-txt");
// localStorage.clear();


let rObject = localStorage.getItem("restaurantObj");
let parsedObj = JSON.parse(rObject);
// console.log(parsedObj.couponsNames);


for (let i = 0; i < parsedObj.couponsNames.length; i++) {
    console.log(parsedObj.couponsNames[i])
    let newtext =       
    document.createElement("h1");
    let newBtn =       
    document.createElement("button");
    newtext.classList.add('new-coupon')
    newBtn.classList.add('new-btn')

    newtext.innerText = parsedObj.couponsNames[i];
    document.getElementById("coupon-names").appendChild(newtext)
    document.getElementById("coupon-names").appendChild(newBtn)
}