"use strict"




let Search_box=document.getElementById("Product_Search_box");
let Para_tag=document.querySelectorAll("p");
let h3_alert_box=document.querySelector(".h3_alert_box");
let value;

Search_box.addEventListener("keyup",()=>{

   let Change_Uppercase_value= Search_box.value.toUpperCase();
 
     let str=true;
   
    Para_tag.forEach((Product_name) => {
        value=Product_name.parentElement;
        value.classList.add("opacity");
        Product_name=Product_name.innerHTML.toUpperCase();

        if(Product_name.includes(Change_Uppercase_value)){
                value.classList.remove("opacity");
                h3_alert_box.classList.remove("no_math_product_name");
                str=false;
        }
    });

    if(str){
    h3_alert_box.classList.add("no_math_product_name");
    }

})