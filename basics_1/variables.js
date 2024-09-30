var stateName = "Uttar Pradesh"

let cityName = "Lakhimpur Kheri"

const townName = "Phardhan"

// All of the above variables are called as global variables like we can use them any where in the file  
let villageName;

// NOTE: Above villageName variable is declared but there no value assigned for this variable so output of this variable is undefined 



if(true){
    var stateName = "Uttarakhand"

    let cityName = "Dehradun"
    const townName = "Malsi"
    //  console.table([stateName,cityName,townName, villageName])
}

console.table([stateName,cityName,townName])

/*
Note: var is not a blocked scope varibale so we can access this variable out of the scope as well but we can  not use or print let and const variables out of scopes
*/
