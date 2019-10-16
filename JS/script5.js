

var john ={
	bills: [128, 48, 268, 180, 42],
	tip: [],
	totalBill: [],
	
	calcTips: function(){
		for(var i=0; i<john.bills.length; i++){
			var bill=john.bills[i];

			if(bill<50){
				john.tip.push(bill*0.2);
			} else if(bill>=50&&bill<200){
				john.tip.push(bill*0.15);
			} else{
				john.tip.push(bill*0.1);
			}
		}
	},

	calcTotal: function(){
		for(var i=0; i<john.bills.length; i++)
			john.totalBill.push(john.tip[i]+john.bills[i]);
	}

};
 
john.calcTips();
john.calcTotal();
console.log(john.bills);
console.log(john.tip);
console.log(john.totalBill);



