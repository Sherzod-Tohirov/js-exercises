function countTrue(arr) {
	return arr.filter((item) => {
		return item === true;
	}).length;
}

// let val = [true, true, false, false, true, true];

// let result = countTrue(val);

// console.log(result);