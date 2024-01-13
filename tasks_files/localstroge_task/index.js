 let cust_object=[{
    src:" 1pic.jpeg",
    name:" Saraniya",
    workrole:"Frontent Develpoer",
    content:"wejkbetxixebxqi TEIWRV4Ey"
    
 },{
    src:"2pic.jpeg",
    name:"Viji",
     workrole:"web Desginer",
     content:"Web designing is  in the developer."


},
{  src:"3pic.jpeg",
    name:"saraniya",
    workrole:"graphic desginer",
    content:"graphic dedginer in the sample desginer."


}]

localStorage.setItem("buttonData",JSON.stringify(cust_object))


 
 
 
 
 
 
 
 
 
 
 let button=document.querySelectorAll("button")


 for( let i=0;i< button.length;i++){
    button[i].addEventListener("click",myfunction)
    function myfunction(){
        location.replace("index2.html")

        localStorage.setItem("index",i)

    }



}


