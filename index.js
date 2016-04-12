//victim's info
var howMany= prompt("How many victims do you have?");
var victimIndex= [];
for(var i=0; i < parseInt(howMany); i++) {
    var victim = [
    prompt("Please enter the name of the victim"),
    prompt("Please enter their phone number"),
    prompt("What is their street location?")
];
victimIndex.push(victim);
}
//volunteer info
var help= prompt("How many volunteers are there?");
var volunteerIndex=[];
for(var i=0; i< parseInt(help); i++) {
    var volunteer= [
    prompt("Please enter the name of the volunteer"),
    prompt("Please enter their phone number"),
    prompt("What is their street location?")
];
volunteerIndex.push(volunteer);
};