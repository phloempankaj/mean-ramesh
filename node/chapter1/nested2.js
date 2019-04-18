/* 
    Sale Amount             Discount
    <=5000                  5%
    5001-15000              10%
    15001-25000             15%
    >25000                  25%
*/

var saleamt = parseInt(process.argv[2]);

if(saleamt>0){
    var disc=0;
    if(saleamt<=5000){
        disc=parseInt(saleamt*0.05);
    }
    else{
        if(saleamt<=15000){
            disc=parseInt(saleamt*0.1);
        }
        else{
            if(saleamt<=25000){
                disc=parseInt(saleamt*0.15);
            }
            else{
                disc=parseInt(saleamt*0.25);
            }
        }
    }
    console.log("Sale Amount    : "+saleamt);
    console.log("Discount       : "+disc);
    console.log("Payable Amount : "+(saleamt-disc));
}
else{
    console.log("Invalid Sale Amount");
}