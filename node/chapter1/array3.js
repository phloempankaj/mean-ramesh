var arr=[];
console.log("arr => "+arr.length+"   "+arr);


arr.push(12);
arr.push(15);
arr.push(25);
arr.push(45);
arr.push(29);
console.log("arr => "+arr.length+"   "+arr);
console.log();



arr.pop();
console.log("arr => "+arr.length+"   "+arr);
console.log();



arr.reverse();
console.log("arr => "+arr.length+"   "+arr);
console.log();



var arr3=arr;
arr2=[66,77,88];
arr=arr.concat(arr2);
console.log("arr => "+arr.length+"   "+arr);
console.log("arr3 => "+arr3.length+"   "+arr3);
console.log();


var arr4=new Array(6);
arr4.fill(0);
console.log("arr4 => "+arr4.length+"   "+arr4);

arr4.fill(12,3);
console.log("arr4 => "+arr4.length+"   "+arr4);


arr4.fill(2,0,2);
arr4.fill(3,2,4);
arr4.fill(4,4,6);
console.log("arr4 => "+arr4.length+"   "+arr4);
console.log();

var arr5=[11,22,33,44,55,66];
var found = arr5.find(function(item){
    return item%2==0;
});
console.log(found);
console.log();

var arr5=[11,22,33,44,55,66];
var found = arr5.findIndex(function(item){
    return item%2==0;
});
console.log(found);
console.log();

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(x => x.length > 6);
console.log(result);
console.log();


var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
console.log(beasts.indexOf('bison', 2));
console.log(beasts.indexOf('giraffe'));
console.log();

