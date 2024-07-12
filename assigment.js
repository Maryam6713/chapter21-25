//--------question1-----------//
// var fname = prompt("enter your first name");
// var lname = prompt("enter your last name");
// var fullName = fname + " " +lname;
// alert("Hello " + fullName)

//----------question2--------------//

// var userInput = prompt("enter your favorite mobile model");
// var inputLenght = userInput.length
// console.log(inputLenght);

//----------question3------------//

// var str = "Pakistan"
// console.log(str);
// var place = str.charAt(7)
// console.log(place);

//----------question4----------//

// var str2 = "Hello world";
// console.log(str2);
// var place2 = str2.lastIndexOf("l")
// console.log(place2);

//--------question5-----------//

// var identity = "Pakistani";
// console.log(identity);
// var find = identity.indexOf("i")
// console.log(find);

//---------question6-------------//

// var fname = prompt("enter your first name");
//  var lname = prompt("enter your last name");
// var concatName = fname.concat(lname);
// alert("Hello " + concatName);

//-----------question7--------------//

// var countryName = "Hyderabad"
// var replaceName = countryName.replace("Hyder" , "Islam")
// console.log(countryName);
// console.log(replaceName)

//-----------question8-----------//

// var message = "Ali and Sami are best friends. They play cricket and football together";
// var replaceWord = message.replaceAll("and", "&")
// console.log(message);
// console.log(replaceWord);

//-----------question9-----------//

// var str = "472"
// console.log(str);
// console.log(typeof(str));
// var changeNumber = parseInt(str)
// console.log(changeNumber);
// console.log(typeof(changeNumber));

//----------question10---------//

// var userInput = prompt("enter any word or sentence")
// var capital = userInput.toUpperCase()
// console.log(capital);

//------------question11-------------//

// var word = prompt("enter any word")
// var titleCase = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
// console.log(titleCase);

//------------question12-----------//

// var num = 35.36 ;
// var num2 = num.toString().replace("." , "")
// console.log(num2);
// var str = parseInt(num2)
// console.log(str);

//------------question13---------//

// var userName = prompt("enter user name")
// if(userName.includes("$") || userName.includes("@") || userName.includes("!") || userName.includes("&")){
//     alert("please enter a valid username without using symbol \n $ , @ , ! or &")
// }else{
//     alert("username accepted" + "" + userName)
// }

//----------question14----------//

var arr = ["cake", "apple pie", "cookie", "chips", "patties"]
var userChoice = prompt("enter an item to search")

var found = false;
for(var i = 0 ; arr.length ; i++){
    if(arr[i].toLowerCase() === userChoice){
        found = true;
        break;
    }
}
if(found){
    alert(userChoice + " is available in our bakery")
}else{
    alert( " is not available in our bakery")
}