var complexNum1 = "5-3i";
var complexNum2 = "9+2i";
var operand = "/"

let a3 = 1;
let a4 = 1;
let b3 = 1;
let b4 = 1;

if ( complexNum1.includes("+") ) {
	var a1 = complexNum1.slice(0, complexNum1.indexOf("+"));
	var b1 = complexNum1.slice((complexNum1.indexOf("+")+1), complexNum1.indexOf("i"));
	a1 = Number(a1);
	b1 = Number(b1);
} 
else {
	var a1 = complexNum1.slice(0, complexNum1.indexOf("-"));
	var b1 = complexNum1.slice((complexNum1.indexOf("-")), complexNum1.indexOf("i"));
	a1 = Number(a1);
	b1 = Number(b1);
}

if ( complexNum2.includes("+") ) {
	var a2 = complexNum2.slice(0, complexNum2.indexOf("+"));
	var b2 = complexNum2.slice((complexNum2.indexOf("+")+1), complexNum2.indexOf("i"));
	a2 = Number(a2);
	b2 = Number(b2);
} 
else {
	var a2 = complexNum2.slice(0, complexNum2.indexOf("-"));
	var b2 = complexNum2.slice((complexNum2.indexOf("-")), complexNum2.indexOf("i"));
	a2 = Number(a2);
	b2 = Number(b2);
}

if (operand == "+") {
	var a = a1 + a2;
	var b = b1 + b2;
}

else if (operand == "-") {
	var a = a1 - a2;
	var b = b1 - b2;
}

else if (operand == '*') {
	let a3 = a1 * a2;
	let a4 = -(b1 * b2);
	let b3 = a1 * b2;
	let b4 = b1 * a2;

	var a = a3 + a4;
	var b = b3 + b4;
}

else if (operand == "/"){
	if (b2 >= 0) {
		let a3 = a1 * a2;
		let a4 = b1 * b2;
		let b3 = -(a1 * b2);
		let b4 = b1 * a2;

		var a5 = a2 * a2;
		var b5 = b2 * b2;

    var amf = a5 + b5

	var a = (a3 + a4) / amf
	var b = (b3 + b4) / amf
	}

	else {
		let a3 = a1 * a2;
		let a4 = b1 * b2;
		let b3 = -(a1 * b2);
		let b4 = b1 * a2;

		var a5 = a2 * a2;
		var b5 = b2 * b2;

    var amf = a5 + b5

	var a = (a3 + a4) / amf
	var b = (b3 + b4) / amf
	}

}

if (b > 0 && b != 1) {
	a = String(a)
	b = String(b)
	console.log(a + "+" + b + "i")
}
else if (b == 1){
	a = String(a)
	b = String(b)
	console.log(a + "+" + "i")
}
else if (b < 0 && b != -1){
	a = String(a)
	b = String(b)
	console.log(a + b + "i")
}
else if (b == -1){
	a = String(a)
	b = String(b)
	console.log(a + "-" + "i")
}