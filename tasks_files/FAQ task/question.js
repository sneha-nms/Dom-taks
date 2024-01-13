let Data=document.createElement("div");
    Data.id="Data";
let Data_1=document.getElementById("Data")

  let hr=document.createElement("hr");
  Data.append(hr)

  let h_2=document.getElementsByTagName("h2");

      let buttons=document.querySelectorAll("#btn_1")
      console.log(buttons);
      // buttons[0].addEventListener("click",function(){add(this)})
      // buttons[1].addEventListener("click",function(){add(this)})
      // buttons[2].addEventListener("click",function(){add(this)})
 
  
let p_content=["Lorem ipsum, or lipsum as it is sometimes known, is dummy "+
"text used in laying out print, graphic or web designs.","Get the ultimate"+
" creative toolkit including." +
"Now includes generative AI apps and features– powered by Adobe Firefly.",
"The word 'lorem', for example, isn't a real Latin word, it's a shortened version "+
"of the word 'dolorem', meaning pain. "]





buttons.forEach((btn,index)=>{

  btn.addEventListener("click",()=>{


    if(btn.innerHTML == "+")
    {
      console.log("if")
      Data.lastChild.remove()
      Data.append(hr,p_content[index]);
      btn.parentElement.appendChild(Data);
      btn.innerHTML="-";

    }
    else{
      console.log("else")
      btn.innerHTML="+";
      Data.parentElement.lastChild.remove();
    
    }
   
    
    buttons.forEach((btnnew,indexnew)=>{
     

      console.log(indexnew);
      // if(btn.parentElement.lastChild.innerHTML == Data.innerHTML){

      //   btn.parentElement.lastChild.remove()
      //   btn.innerHTML="+"
      // }
      // else{
        
        if(index != indexnew){
          
          btnnew.innerHTML="+";
        }
        
        // btnnew.innerHTML="+";
  
      })
      
    })
  })




// function add(x){
//     // console.log(x.parentElement);
//     console.log(x.parentElement.lastChild.innerHTML)
//     console.log(Data.innerHTML)
//       if(x.parentElement.lastChild.innerHTML == Data.innerHTML){
//         console.log("if")
//           x.parentElement.lastChild.remove()
//           x.innerHTML="+"
      
//       }else{
//         console.log("else")
//         if(h_2[0]==x){
          
//           Data.lastChild.remove()
//           Data.append(hr,p_content[0])
//           x.parentElement.append(Data)
//           x.innerHTML="-"
//           h_2[1].innerHTML="+"
    
//           h_2[2].innerHTML="+"
//         }
//        else if(h_2[1]==x){
//         Data.lastChild.remove()
//           Data.append(hr,p_content[1])
//           x.parentElement.append(Data)
//           x.innerHTML="-"
//           h_2[0].innerHTML="+"
    
//           h_2[2].innerHTML="+"
//         }
//         else{
//           Data.lastChild.remove()
//           Data.append(hr,p_content[2])
//           x.parentElement.append(Data)
//           x.innerHTML="-"
//           h_2[1].innerHTML="+"
//           h_2[0].innerHTML="+"
//         }
//       }
    
//     }


