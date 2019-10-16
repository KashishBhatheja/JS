function tip(bill){
	if(bill<50){
		return bill*0.2;
	} else if(bill>=50&&bill<200){
		return bill*0.15;
	} else{
		return bill*0.1;
	}
}

var bills=[128, 48, 268];
var tips= [tip(128), tip(48), tip(268)];
var Amount= [124+tip(128), 48+tip(48), 268+tip(268)];

console.log(tips);
console.log(Amount);