let container1=document.createElement('div')
container1.setAttribute('id','container1')



let maindiv=document.createElement('div')
 maindiv.setAttribute('class','container')




  let headtag=document.createElement('h1')
   headtag.textContent='Model Project';

   let button1=document.createElement('button')
   button1.setAttribute('id','but')
   button1.textContent='Open Model';

   let subdiv2=document.createElement('div');
   subdiv2.setAttribute('class','subdiv2');

   let headtag2=document.createElement('h2')
  headtag2.setAttribute('id','head2');
  headtag2.textContent='Model Content';
  
  let button2=document.createElement('button')
   button2.setAttribute('class','btn2')
   button2.textContent='X';



    document.body.append(container1,maindiv,)
    container1.append(subdiv2)
    maindiv.appendChild(headtag)
    maindiv.appendChild(button1)
    // maindiv.appendChild(subdiv2)
    subdiv2.appendChild(button2)
    subdiv2.appendChild(headtag2)
  
 subdiv2.classList.add("display_none")


 button1.addEventListener('click',myfunction)
 function myfunction(){
      container1.classList.add("add");
    
        maindiv.classList.add("display_none")
        subdiv2.classList.remove('display_none')
        subdiv2.classList.add("display_block")

  
  
      }
      button2.addEventListener('click',bttn2)
      function bttn2(){
        document.getElementById('container1').classList.remove("add");
        maindiv.classList.remove("display_none")
        subdiv2.classList.add("display_none")
        

       
    }
 
