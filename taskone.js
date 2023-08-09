function zeroEnd(numbers) {
  
  let new_arr_zeroes = [];
  let new_arr_values = [];
  
  for(let i = 0; i < numbers.length; i++) {
  	 
  	 if(Number(numbers[i]) == 0) {
  	 
  	 	new_arr_zeroes.push(numbers[i]);
  	 
  	 }else {
  	 
  	 	new_arr_values.push(numbers[i]);
  	 
  	 }
  
  }
  
  return new_arr_values.concat(new_arr_zeroes).join(""); 

}

// let numbers = [1,3,0,5,0,7,0];

// let result = zeroEnd(numbers);

// console.log(result);