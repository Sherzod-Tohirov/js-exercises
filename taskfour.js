function maxPrice(obj) {
  
  let new_arr = [[],[]];
  
  let ind = 0;
  
  let maximum = 0;
  
  obj.forEach((item) => {
  
        new_arr[0].push(item.name);
  
        new_arr[1].push(item.price);
  
  });
  
  new_arr[1].forEach((item, index) => {
  
     if(item > maximum) {
  
     	maximum = item;
  
     	ind = index;
  
     }
  
  });
  
  return new_arr[0][ind];

}


// let val = [
//      {
//      	name: "Ali",
//      	price: 800
//      },
//      {
//      	name: "Aziz", 
//      	price: 1000
//      },
//      {
//      	name: "Ahmad",
//      	price: 1200
//      },
//      {
//      	name: "Rustam",
//      	price: 950
//      },
//      {
//      	name: "Zafar",
//      	price: 1560
//      },

//      {
//      	name: "Davron",
//      	price: 2150
//      }    
// ];


// let result = maxPrice(val);

// console.log(result);