var vacationType=prompt("What type of vacation do you want to go on, musical, tropical, or adventurous?");
var groupSize=prompt("How many are in your group?");

if(vacationType=="musical"){
place="New Orleans"
}
else if(vacationType=="tropical"){
    place="Tahiti"}
else if(vacationType=="adventurous"){
    place="the Grand Canyon to go whitewater rafting"
}
else if(vacationType==""){
    place="nowhere your quarantined"
}

if(groupSize<=2){
    vehicle="Helicopter!"
}
else if(groupSize==3){
    vehicle="First Class Flight!"
}
else if(groupSize==4){
    vehicle="First Class Flight!"
}
else if(groupSize==5){
    vehicle="First Class Flight!"
}
else if(groupSize>=6){
    vehicle="Charter Flight!"
}


var results=alert("Since there are " + groupSize + " in your group and you want to go on a " + vacationType + " vacation you should go to " + place + " on a " + vehicle)
console.log("Since there are " + groupSize + " in your group and you want to go on a " + vacationType + " vacation you should go to " + place + " on a " + vehicle)
