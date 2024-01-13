


let button=document.querySelector("button")
button.addEventListener("click",myfunction)
function myfunction(){
    location.replace("index.html");
}


let objectData=JSON.parse(localStorage.getItem("buttonData"))
 console.log(objectData)


let index=localStorage.getItem("index")
console.log(index)
if(objectData){
    img.src=objectData[index].src;
    h2_content.innerHTML=objectData[index].name;
    h4_content.innerHTML=objectData[index].Desgin
    para.innerHTML=objectData[index].content;



}
