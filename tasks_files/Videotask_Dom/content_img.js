// let button=document.getElementById("btn1")
// let button2=document.getElementById("btn2")
// let button3=document.getElementById("btn3")

let h3=document.getElementById("hea")
let p=document.getElementById("para")
let img=document.getElementById("cha")

// button.addEventListener("click",first)
// button2.addEventListener("click",vision)
// button3.addEventListener("click",goal)

// button.classList.add("white")

//     button2.classList.add("normal")
//     button3.classList.add("normal")

// function first() {
//     // button.classList.add("btn11")
//     // button.style.backgroundColor="white"
//     console.log("incoming history")
//     button.classList.remove("normal")
//     button.classList.add("white")

//     button2.classList.add("normal")
//     button3.classList.add("normal")
    
//     img.src="na4.jpg"
//     h3.innerText="History"
//     p.innerText="Mountain, landform that rises prominently above its surroundings, generally exhibiting steep slopes, a relatively confined summit area, and considerable local relief. Mountains generally are understood to be larger than hills, but the term has no standardized geological meaning. Very rarely do mountains occur individually. In most cases, they are found in elongated ranges or chains. "
// }
// function vision() {
//     // button.style.backgroundColor="white"
//     // button.classList.remove("btn11")

//     button2.classList.add("white")
//     button2.classList.remove("normal")

//     button.classList.remove("white")
//     button.classList.add("normal")

//     button3.classList.add("normal")
//     img.src="na3.jpeg"
//     h3.innerText="Vision"
//     p.innerText="Mountainous terrains have certain unifying characteristics. Such terrains have higher elevations than do surrounding areas. Moreover, high relief exists within mountain belts and ranges. Individual mountains, mountain ranges, and mountain belts that have been created by different tectonic processes, however, are often characterized by different features."
// }
// function goal() {
//     // button.style.backgroundColor="#e7e7e7"
//     // button.classList.remove("btn11")
//     button2.classList.remove("white")
//     button2.classList.add("normal")

//     button3.classList.add("white")
//     button3.classList.remove("normal")
    
//     button.classList.remove("white")
//     button.classList.add("normal")
    
    


//     img.src="na2.jpg"
//     h3.innerText="Goals"
//     p.innerText="Two properties of rocks contribute to the support of mountains, mountain belts, and plateaus, namely strength and density. If rocks had no strength, mountains would simply flow away. At a subtler level, the strength of the material beneath mountains can affect the scale of the topography."
// }








//-----------------------------------------------------//

let arr1=[
  {
    src:"na4.jpg",
    text:"History",
    content:"Mountain, landform that rises prominently above its surroundings, "
    +"generally exhibiting steep slopes, a relatively confined summit area, and "
    +"considerable local relief. Mountains generally are understood to be larger than hills, but the term has no standardized geological meaning. Very rarely do mountains occur individually." 
    +"In most cases, they are found in elongated ranges or chains. "
  
  },
  {
  src:"na2.jpg",
  text:"Version",
  content:"Mountainous terrains have certain unifying characteristics. Such terrains have higher elevations than do surrounding areas. "
  +"Moreover, high relief exists within mountain belts and ranges. Individual mountains, mountain ranges, and mountain"
  +" belts that have been created by different tectoni."
   +"processes, however, are often characterized by different features."


},
{
  src:"na3.jpeg",
  text:"Golas",
  content:"Two properties of rocks contribute to the support of "
  +"mountains, mountain belts, and plateaus, namely strength and density." 
  +"If rocks had no strength, mountains would simply flow away. At a subtler level, the strength of "
  +"the material beneath mountains can affect the scale of the topography."
}
]

// let buttons=document.querySelectorAll('button')
// buttons[0].classList.add("white");
// buttons[0].classList.add("pointer");

// console.log(buttons);
//  let index=-1;
//  buttons.forEach(myfunction)
 


//   function myfunction(btn,index){
//     // console.log(btn.innerHTML);

//     btn.addEventListener("click",()=>{

//     //  col1.classlist.add("active");
//       img.src=arr1[index].src
//       h3.innerHTML=arr1[index].text
//       p.innerHTML=arr1[index].content

//       btn.classList.add("white");
//       btn.classList.add("pointer");



//       buttons.forEach((btn1,index1)=>{
//         if(index!=index1){
//           btn1.classList.remove("white");
//           index.classList.remove("pointer");
//         }
//       }
  
  

//     });
   

//   }


let buttonlist=document.querySelectorAll("button");
buttonlist[0].classList.add("white")
buttonlist[0].classList.add("pointer")

buttonlist.forEach((btn,index)=>{
    btn.addEventListener("click",() => {
      
        img.src=arr1[index].src;
        h3.innerHTML=arr1[index].text;
        p.innerHTML=arr1[index].content;

        btn.classList.add("white")  
        btn.classList.add("pointer")
      
        buttonlist.forEach((btn1,indexnew)=>{
            if(index != indexnew)
            {
              btn1.classList.remove("white")  
              btn1.classList.remove("pointer")
            }

        });
    });
})




