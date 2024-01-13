"use strict";

let button=document.querySelector("#button")
let input = document.getElementById("input");

 input.max=new Date().toISOString().split('T')[0];
    console.log(new Date().toISOString())
   

        button.addEventListener("click", Age);

        function Age() {
            let birthDate = new Date(input.value);
            let currentDate = new Date();

            let year = currentDate.getFullYear() - birthDate.getFullYear();
            let month = currentDate.getMonth() - birthDate.getMonth();
            let day = currentDate.getDate() - birthDate.getDate();

            if (day < 0) {
                let lastMonthDays = new Date(currentDate.getFullYear(), currentDate.getMonth(), -1).getDate()+2;
                day += lastMonthDays;
                month--;
            }
             if (month < 0) {
                month += 12;
                year--;
            }

            document.getElementById("year").innerHTML = year +":YEAR";
            document.getElementById("month").innerHTML = month +":month";
            document.getElementById("days").innerHTML = day +":day";
        }



        ///======================================================================///
 



//  button.addEventListener("click",agecalcluator)
//   function agecalcluator(){
//    let input=document.querySelector("#input").value;
//    let input_date=new Date(input.value)

//    let day1= input_date.getDate()
//    let month1=input_date.getMonth()+1;
//    let year1=input_date.getFullYear();

//  let today= new Date()
//    let day2= today.getDate();
//    let month2=today.getMonth()+1;
//    let year2= today.getFullYear()

//  let day3, month3,year3;

//   year3=year2-year1;
//   if(month2 >=  month1){
//     month3=month2-month1;
//   }
//   else{
//    year3--;
//    // console.log(year3)
//    month3 =12+ month2-month1
//   }

//   if(day2 >= day1)
//   {
//    day3=day2-day1;
//   }
//   else{
//    month3--;
//    day3= getdayintime(year1,month1)+day2-day1;
//   }
//   if(month3 < 0){
//    month3=11;
//    year3--;
//   }
//   agecalcluator.innerHTML = `${year3} years, ${month3} months, ${day3} days old`;
//   let display_month=document.querySelector("#month")
//       display_month.innerHTML=month3+"months";
//       let display_year=document.querySelector("#year")
//       display_year.innerHTML=year3+":years";
//      let display_day=document.querySelector("#days")
//     display_day.innerHTML=day3+"days";

//   }
//   function getdayintime(year,month){
//     return new  Date( year,month,0).getDate();
//   }

// // //   

// // // let result;

//  button.addEventListener("click",()=>{

//    const update=function(){
//       let input=document.querySelector("#input");
//       // let currenday=new Date();
//         let  day=new Date(input.value);
//         let  time=day.getTime();
//            let today=new Date();
//            let timenow=today.getTime();
//            let value=timenow-time;

//            let today_month2=new Date();
//             let current_month=today_month2.getMonth()+1;

//            let final_month1=day.getMonth()+1;
//            let final_day=current_month-final_month1;
          

       




//            let today_day=new Date();
//             let curent_days=today_day.getDate();
//             let input_day = day.getDate();
//             let output_day= curent_days -input_day;
   
//        let days=Math.floor(output_day);
//       let month= Math.floor(final_day);
//       let year=Math.floor(value/(1000*60*60*24*365.25));



//       let display_month=document.querySelector("#month")
//       display_month.innerHTML= month+"months";
//       let display_year=document.querySelector("#year")
//       display_year.innerHTML=year+":years";
//      let display_day=document.querySelector("#days")
//     display_day.innerHTML=days+"days";

   
//     if(month < 0)
//     {
//       console.log("month");
//       days--
//       month += 12
//     }
//          }
//          setInterval(update,1000);
         

//          })

         


   
   
  

 


 