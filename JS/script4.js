var Mark= {
	fullName: 'Mark',
	mass: 50,
	height: 2.2,
	calcBMI: function(){
		this.BMI= this.mass/(this.height*this.height);
	}
};

var John={
	fullName: 'John',
	mass: 62,
	height: 1.8,
	calcBMI: function(){
		this.BMI= this.mass/(this.height*this.height);
	}
};

Mark.calcBMI();
John.calcBMI();

console.log(Mark);
console.log(John);

if(Mark.BMI>John.BMI){
	console.log(Mark.fullName + 'has higher BMI i.e.' + Mark.BMI);
} else{
	console.log(John.fullName + 'has higher BMI i.e.' + John.BMI);	
}



