var arr=[12,23,34,45];
console.log("arr => "+arr.length+"   "+arr);


var arr2=arr;
console.log("arr2 => "+arr2.length+"   "+arr2);


arr2[2]=66;
console.log();
console.log("arr => "+arr.length+"   "+arr);
console.log("arr2 => "+arr2.length+"   "+arr2);

arr[7]=78;
console.log("arr => "+arr.length+"   "+arr);
console.log("arr2 => "+arr2.length+"   "+arr2);



