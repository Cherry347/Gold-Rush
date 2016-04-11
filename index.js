var userNum= prompt("Please enter your phone number using this template: 000-000-0000 \nRest assured your information will not be used for SPAM.");

var feedBack= function (userNum) {    
    if (userNum.charAt(3) === "-" && userNum.charAt(7) === "-") {
        alert("Thank you!");
    }
    else {
        alert("I'm sorry, this is not a valid phone number, please try again using the '000-000-000' format.");
    }
}
feedBack(userNum);

var userBirth= prompt("Please enter your birth date using this template: 00-00-00");

var retrunVal= function (usesrBirth) {
    if(userBirth.charAt(2) === "-" && userBirth.charAt(5) === "-") {
        alert("Thank you!");
    }
    else {
        alert("I'm sorry, this is not a valid birth date, please try again using the '00-00-00' format.");
    }
}
retrunVal(userBirth);

var userPcode= prompt("Please enter your postal code using this template: 00000 OR 00000-0000");

var zip = function (userPcode) {    
    if (userPcode.length === 5 || userPcode.charAt(5) === "-") {
        alert("Thank you!");
    }
    else {
        alert("I'm sorry, this is not a valid postal code, please try again using the '00000' or '00000-0000' format.");
    }
}
zip(userPcode);

var userState= prompt("Please enter your state abbreviation using this template: XX");

var states= ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];

if (states.indexOf(userState) > -1) {
	console.log("Thank You");
}
else {
	console.log("Invalid Entry");
}
var userStatus= prompt("Are you married? y/n");
if(userStatus === "yes") {
	console.log("Good, stay that way");
}
else {
	console.log("Live it up!");
}