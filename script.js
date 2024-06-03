// console.log(document.getElementById("number"))
const count_number= document.querySelector("#number")
const decrease =document.querySelector("#decrease")
const reset =document.querySelector("#reset")
const increase =document.querySelector("#increase")
let count = 0

increase.addEventListener("click", ()=>{
    count +=1
    count_number.textContent=count;

    if (Number(count_number.textContent) >0){
        count_number.style.color = "green" ;
        
    } 
})

reset.addEventListener("click", ()=>{
    count=0
    count_number.textContent=count
    count_number.style.color = "black";
})

decrease.addEventListener("click", ()=>{
    count -=1
    count_number.textContent=count
    if (Number(count_number.textContent) <0){
        count_number.style.color = "red" ;
        
    }  
})

 
    






