var a=parseInt(process.argv[2]);
var b=parseInt(process.argv[3]);
var c=parseInt(process.argv[4]);
var d=parseInt(process.argv[5]);

var g;

if(a>b){
    if(a>c){
        if(a>d){
            g=a;
        }
        else{
            g=d;
        }
    }
    else{
        if(c>d){
            g=c;
        }
        else{
            g=d;
        }
    }
}
else{
    if(b>c){
        if(b>d){
            g=b;
        }
        else{
            g=d
        }
    }
    else{
        if(c>d){
            g=c;
        }
        else{
            g=d;
        }
    }
}
console.log("Greater : "+g);