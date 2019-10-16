var avgJ= (89+120+103)/3;
var avgM= (116+94+123)/3;

console.log(avgJ);
console.log(avgM);

if (avgM>avgJ) {
	console.log("Mike team wins having " + avgM + "score");
} else if (avgJ<avgM ){
	console.log("John team wins having " + avgJ + "score")
} else{
	console.log("Draw");
}

var avgMa= (97+134+105)/3;

console.log(avgMa);

if (avgM>avgJ && avgM>avgMa) {
	console.log("Mike team wins having " + avgM + "score");
} else if (avgJ<avgM && avgJ>avgMa){
	console.log("John team wins having " + avgJ + "score")
} else if (avgMa<avgM && avgMa>avgJ){
	console.log("Mary team wins having " + avgMa + "score")
} else{
	console.log("Draw");
}