let btn=document.getElementById('btn')
let para=document.querySelectorAll('#para')
let h1=document.getElementById('head')

let dark = false;
btn.addEventListener('click',myfunction)
function myfunction(){

    
    btn.classList.toggle('back_color')
    h1.classList.toggle('head')
   document.body.classList.toggle('back')
   document.body.classList.toggle('para')
   if(dark == false)
   {
    btn.innerText='Light Mode';
    dark=true;
    
   }
   else {
    btn.innerText='Dark Mode'
    dark=false;
   }
//  para.forEach(pa => {
//     pa.classList.toggle('para')    
//  })

// else{
//     btn.innerText='Dark Mode'
// }

}