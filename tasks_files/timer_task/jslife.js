


//================================================================================================================//
    
let Uname="Pattabiramana"

localStorage.setItem("username", Uname)

 let object=localStorage.getItem(Uname);
console.log(object)

 let object1=[{
     name:"Ravi",
     Id:1245413,
     Age:25

 },{
    name:"Sanker",
    Id:2897,
    Age:20

 }]


 localStorage.setItem("Arryobject",JSON.stringify(object1))
 let newobject=JSON.parse(localStorage.getItem("Arryobject"))
 console.log(newobject)