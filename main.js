let foodName = document.querySelector("#foodName");
let qty = document.querySelector("#qty");
let price = document.querySelector("#price");

let submitBtn = document.querySelector("#order");
let table = document.querySelector("#table tbody")
let tfoot = document.querySelector("#table tfoot")
let err = document.querySelector("span")
let error = document.querySelector (".err")
let time= document.querySelector ("time")
let p= document.querySelector ("p")


//var sumVal = document.getElementById("table"),sumVal = 0; 



submitBtn.addEventListener("click", (e) =>{
  e.preventDefault();
  inputValid();
  // sumVal()

})




function register(foodName,qty,price){
  let total = price.value * qty.value 
  let order = `<tr>   <td>${foodName.value}</td>  <td>${qty.value}</td>   <td>$${price.value}</td>  <td>$${total}</td>   </tr> `;
  
  let subTotal =  `  <tr >    <td colspan="3">Wadarta Guud</td>  <td>$${total}</td></tr>`;
  table.innerHTML = order;
  tfoot.innerHTML = subTotal;
}



function inputValid() {
  if (foodName.value==="" || qty.value ==="" || price. value==="") {
    err.innerHTML = "Sorry wax dalab ah ma jiraan ❌";
  
    
  } else {
      err.innerHTML = "";
      register(foodName,qty,price);
  }
}



/*function sumVal() {
  
  for(var i = 1; i < table.rows.length; i++)
            {
                sumVal = sumVal + parseInt(table.rows[i].cells[3].innerHTML);
            }
            console.log (sumVal)
}*/


var today = new Date();
var timeNow = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
time.innerHTML = timeNow



var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(); 
p.innerHTML = date
