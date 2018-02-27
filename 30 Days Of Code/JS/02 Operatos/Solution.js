'use strict';
var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
	_input = _input.split(new RegExp('[\n ]+'));
	main(+(_input[0]), +(_input[1]), +(_input[2]));    
});

function main(mealCost, tipPercent, taxPercent) {
//Main Code Starts

    //var meal_cost = parseFloat(readLine());
    //var tip_percent = parseInt(readLine());
    //var tax_percent = parseInt(readLine());
    let total_cost= mealCost*(1.00+(tipPercent+taxPercent)/100.0);
    
    console.log("The total meal cost is "+total_cost.toFixed()+" dollars.");
//Main Code Ends
}

