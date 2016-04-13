// increaseing by: 100
for(var i=0; i< 600; i += 100) {
    console.log(i);
}
// x2
for(var i=1; i< 64; i= i*2){
    console.log(i);
}
//triple
function three (x) {
    var count = 1;
    for(var i = 0; i < x; i++){
        console.log(count, count, count);
        count = count + 1;
    }
}
three(3);
// +2
for(var i=0; i< 12; i += 2) {
console.log(i);
}
// add three 
for(var i=0; i<18; i+= 3) {
console.log(i);
}
// -1 
for(var i= 9; i> -1; i -= 1) {
    console.log(i);
}
// 0-3 (3 times)
for(var j=0; j<3; j++){
	for(var i=0; i<4; i++) {
		console.log(i);
	}
}

