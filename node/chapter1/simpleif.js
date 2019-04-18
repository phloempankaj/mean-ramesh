var a=parseInt(process.argv[2]);
var b=parseInt(process.argv[3]);
var g="Equal";
if(a>b){
    g=a;
}

if(b>a){
    g=b;
}
console.log("Greater = "+g);
