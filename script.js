//slider variables
let leftBtn = document.getElementById("nav-left");
console.log(leftBtn);
let rightBtn = document.getElementById("nav-right");
console.log(rightBtn);
let boxOne = document.getElementById("box1");
console.log(boxOne);
let boxTwo = document.getElementById("box2");
console.log(boxTwo);
let boxThree = document.getElementById("box3");
console.log(boxThree);
let boxGrid = document.getElementById("boxes-grid")
console.log(boxGrid);

                        //left side slider

let contentCreation = 1;
let webDesgin = 3;
let boxOneIndex = "1";

let rightTrue = false;
let leftTrue = false;

leftBtn.addEventListener('click', function() {
        // console.log('B 1 index: ' + boxOneIndex);
        console.log(rightTrue);

        if (rightTrue = true) {
            console.log('right is true')

        if (boxOneIndex == 1) {
            console.log('ealibfwilaebe')
        } else if (boxOneIndex == 2) {
            console.log('else if boxoneindex 2 is good')
            boxOne.style.animationName = "leftSlideShrink";
            boxTwo.style.animationName = "leftSlideGrow";
            boxThree.style.animationName = "leftSlide";


            setTimeout(() => {
                boxOne.style.gridColumn = "1";
                boxTwo.style.gridColumn = "2";
                boxThree.style.gridColumn = "3";   
                boxThree.style.height = "60%";   
                boxTwo.style.height = "100%";
                boxOne.style.height = "60%";
                boxTwo.style.alignSelf = "end";
                boxOneIndex = "1";
                console.log(boxOneIndex);      
                
            }, 1500);

            rightTrue = false;


            return;
        } else if (boxOneIndex == 3) {
            console.log('else if boxoneindex 3 is good');
            console.log('left case 2 ran');
            boxOne.style.animationName = "leftSlideGrow";
            boxTwo.style.animationName = "leftSlide";
            boxThree.style.animationName = "leftSlideShrink";

            setTimeout(() => {
                boxOne.style.gridColumn = "2";
                boxTwo.style.gridColumn = "3";
                boxThree.style.gridColumn = "1"; 
                boxOne.style.height = "100%";     
                boxThree.style.height = "60%";
                boxTwo.style.alignSelf = "end";
                boxOneIndex = "3";
                console.log(boxOneIndex);      

            }, 1500);
            return;
        }
        return;
    }

    // console.log("RIGHT" + contentCreation);
    //     webDesgin--;
    //     console.log('Left Index:' + webDesgin)
    // if (webDesgin <= 1) {
    //     webDesgin = 4;
    // }

    // if (contentCreation = 1) {
    //     contentCreation = 3;
    //     console.log('first' + contentCreation);
    // } else if (contentCreation = 3) {
    //     contentCreation = 2;
    //     console.log('second' + contentCreation);
    // if (contentCreation = 2) {
    //         boxOneIndex = "2"
    //         console.log('boxoneIndex Left = 2')
    // }



        switch(boxOneIndex) {
            case "1":
                // console.log("testgood");
                console.log('left case 1 ran');

                boxOne.style.animationName = "leftSlide";
                boxTwo.style.animationName = "leftSlideShrink";
                boxThree.style.animationName = "leftSlideGrow";

                setTimeout(() => {
                    boxOne.style.gridColumn = "3";
                    boxTwo.style.gridColumn = "1";
                    boxThree.style.gridColumn = "2";
                    boxThree.style.height = "100%";
                    boxTwo.style.height = "60%";
                    boxTwo.style.alignSelf = "end";
                    boxOneIndex = "2";  
                    console.log(boxOneIndex);      
        
                }, 1500);      
                break;
            case "2":
                // console.log("test2good")
                console.log('left case 2 ran');
                boxOne.style.animationName = "leftSlideGrow";
                boxTwo.style.animationName = "leftSlide";
                boxThree.style.animationName = "leftSlideShrink";

                setTimeout(() => {
                    boxOne.style.gridColumn = "2";
                    boxTwo.style.gridColumn = "3";
                    boxThree.style.gridColumn = "1"; 
                    boxOne.style.height = "100%";     
                    boxThree.style.height = "60%";
                    boxTwo.style.alignSelf = "end";
                    boxOneIndex = "3";
                    console.log(boxOneIndex);      

                }, 1500);
                break;
            case "3":
                    // console.log("test2good")
                    console.log('left case 3 ran');

                    boxOne.style.animationName = "leftSlideShrink";
                    boxTwo.style.animationName = "leftSlideGrow";
                    boxThree.style.animationName = "leftSlide";


                    setTimeout(() => {
                        boxOne.style.gridColumn = "1";
                        boxTwo.style.gridColumn = "2";
                        boxThree.style.gridColumn = "3";   
                        boxThree.style.height = "60%";   
                        boxTwo.style.height = "100%";
                        boxOne.style.height = "60%";
                        boxTwo.style.alignSelf = "end";
                        boxOneIndex = "1";
                        console.log(boxOneIndex);      

                    }, 1500);
                    break;

        }
        console.log("end")
    })

//right side slider

rightBtn.addEventListener('click', function() {
    console.log('B 1 index: ' + boxOneIndex);
    contentCreation += 1;
    console.log('CC Index:' + contentCreation)
if (contentCreation >= 3) {
    contentCreation = 0;
}

if (webDesgin == 2) {
    boxOneIndex = "3"
}

console.log('webDesgin ' + webDesgin)

// } else if (webDesgin == 1) {
//     boxOneIndex = "2"
// }

// console.log(boxOneIndex)

    switch(boxOneIndex) {
        case "1":
            console.log('right case 1 ran');
            // console.log("testgood");
            boxOne.style.animationName = "rightGrow";
            boxTwo.style.animationName = "rightShrink";
            boxThree.style.animationName = "rightSlide";

            setTimeout(() => {
                boxOne.style.gridColumn = "2";
                boxTwo.style.gridColumn = "3";
                boxThree.style.gridColumn = "1";
                boxThree.style.height = "60%";
                boxTwo.style.height = "60%";
                boxOne.style.height = "100%"
                boxTwo.style.alignSelf = "end";
                boxOneIndex = "2";  
                console.log(boxOneIndex);      
            }, 1500);      
            break;
        case "2":
            // console.log("test2good")
            console.log('right case 2 ran');
            boxOne.style.animationName = "rightShrink";
            boxTwo.style.animationName = "rightSlide";
            boxThree.style.animationName = "rightGrow";

            setTimeout(() => {
                boxOne.style.gridColumn = "3";
                boxTwo.style.gridColumn = "1";
                boxThree.style.gridColumn = "2"; 
                boxOne.style.height = "60%";     
                boxThree.style.height = "100%";
                boxTwo.style.alignSelf = "end";
                boxOneIndex = "3";
                console.log(boxOneIndex);      
            }, 1500);
            break;
         case "3":
                // console.log("test3good")
                console.log('right case 3 ran');
                boxOne.style.animationName = "rightSlide";
                boxThree.style.animationName = "rightShrink";
                boxTwo.style.animationName = "rightGrow";

                setTimeout(() => {
                    boxOne.style.gridColumn = "1";
                    boxTwo.style.gridColumn = "2";
                    boxThree.style.gridColumn = "3";   
                    boxThree.style.height = "60%";   
                    boxTwo.style.height = "100%";
                    boxOne.style.height = "60%";
                    boxTwo.style.alignSelf = "end";
                    boxOneIndex = "1";
                    console.log(boxOneIndex);      
                }, 1500);
                break;

    }
    console.log("end");
    rightTrue = true;
})