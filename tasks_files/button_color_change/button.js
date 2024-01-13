
// button1.textContent='Change_BC';


// button2.textContent=' color_code';
let body=document.createElement('body')
let main=document.createElement('div')
main.setAttribute('class','container')
let button1=document.createElement('button')
button1.setAttribute('class','btn1')
button1.textContent='backcolor';
let button2=document.createElement('button')
button2.setAttribute('class','btn2')
button2.textContent='color_code';


  document.body.append(main);
  main.append(button1,button2);
//   main.appendChild(button2);

  let colors=['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF']
  let index=0;

  button1.addEventListener('click',myfunction)
function myfunction(){
       index= index >= colors.length-1 ? 0:index+1;
       document.body.style.backgroundColor=colors[index];  
       button2.innerHTML=colors[index];
    //    index++;
    }