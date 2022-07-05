function compute()
{
   //  creating a variable for principal and assigning to input element
    var principal = document.getElementById("principal").value;
  
    // creating a variable for rate and assigning to input element
    var rate = document.getElementById("rate").value;
    
    // creating a variable for years and assigning to input element
    var years = document.getElementById("years").value;

    //creating a variable called interest and assigning its value
    var interest = principal * years * rate / 100;

    // converting No of Years into actual years
    var years = new Date() .getFullYear() + parseInt(years);


    if(principal ==undefined || principal <=0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return
    }
    else{
        var principal = "If you deposit <principal>" + principal+",</mark> <br>";
        var rate = "at an interest rate of <interest>" + rate +"%, </mark> <br>";
        var interest = "You will receive an amount of <interest>"+ interest+", </mark><br>";
        var years = "in the year <mark'>" + years +"</mark>"; 
       
        document.getElementById("result").innerHTML=
         principal+ rate + interest + years;
         }
  
}
        
function updateRate(){

    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;

}