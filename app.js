// table
// for (var a = 1; a <= 100; a = a+10){
// for (var b = a; b < a+10; b++){
//     document.write(b + " ")
// }
// document.write("<br>")
// }

// changingCase
// var city = prompt("Enter Your City Name");
// city =city.toLowerCase()
// var arr = ["karachi", "lahore", "islamabad", "quetta"]

// for (var i = 0; i < arr.length; i++){
//     if(arr[i] === city){
//         alert("City is found")
//         break;
//     }
//     else{
//         alert("City is not found")
//     }
// }
    
var city = prompt("Enter Your City Name");
city = city.toLowerCase();
var arr = ["karachi", "lahore", "islamabad", "quetta"];
var cityFound = false;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] === city) {
        cityFound = true;
        break;
    }
}

if (cityFound) {
    alert("City is found");
} else {
    alert("City Not Found");
}



// date
//  date = new Date();
//  year = date.getFullYear();
//  day = date.getDay();
//  hour = date.getHours();
//  month = date.getMonth();
//  second = date.getSeconds();
// document.write(date)
// document.write(year)
// document.write(day)
// document.write(hour)
// document.write(month)
// document.write(second)
