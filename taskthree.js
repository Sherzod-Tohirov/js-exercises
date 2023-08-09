function numbers(arr) {
	
	let sum = 0;
	
	arr.forEach((item) => {
    
      if(Number(item) > 0) {
    
        sum += item;
    
      }
	
	});

	return sum;
}

// let val = [1,2,3,4,5,0,0,-1,-5,-7,0];

// let result = numbers(val);

// console.log(result);