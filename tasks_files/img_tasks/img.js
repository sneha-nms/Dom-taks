// let body=document.createElement('body')
let maindiv=document.createElement('div')
maindiv.setAttribute('class','container')
let subdiv=document.createElement('div')
subdiv.setAttribute('class','subcontainer')


let Firstimg=document.createElement('img')
Firstimg.src='1img.jpeg';
Firstimg.setAttribute('class','img')
// Firstimg.setAttribute()

let prv=document.createElement('button')
prv.setAttribute('class','btn1')
prv.textContent='previous';

let next=document.createElement('button')
next.setAttribute('class','btn2')
next.textContent='Next';

document.body.append(maindiv)
maindiv.append(subdiv)
subdiv.append(prv,Firstimg,next)


let imgs=['1img.jpeg','2img.jpeg','3img.jpeg','4img.jpeg','5img.jpeg','6img.jpeg']
  let index=0;  
next.addEventListener('click',myfunction)
   function myfunction(){
    index= index >= imgs.length-1 ? 0:index+1;
    Firstimg.src=imgs[index]

 }

 prv.addEventListener('click',previous)
   function previous(){
    console.log(index)
    index= index == 0 ? imgs.length-1 :index-1;

   
  
    // if(index <= 0){
    //     index=imgs.length;
    //     index--;
    // }
    Firstimg.src=imgs[index]

 }

