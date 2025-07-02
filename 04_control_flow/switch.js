// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

/* 
const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
        case 2:
            console.log("February");
            break;
            case 3:
                console.log("March");
                break;
                case 4:
                    console.log("April");
                    break;
                    
                    default:
                        console.log("Default case Match");
                        break;
                        
                        // case match ke baad ka saara code execute hota hai except default, this ain't good but js being a old language this does happen, this is why we use break.
                    }
*/


const userLoggedIn = true
const debitCard = true
const userLoggedInFromGoogle = false
const userLoggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3){
    console.log("Buy!!");
}
else{
    console.log("cannot buy");
}