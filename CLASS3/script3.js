const inputFields = document.getElementsByClassName("input_button");
let operatorString="";
let result=0;
let operantsArray = [];
let operatorArray =[];
let isLastOperator = true;
for(let i=0;i<inputFields.length;i++)
{
    inputFields[i].addEventListener("click",listener)
}

function listener(event)
{
    
    if(!event.target.getAttribute("role"))
    { 
        if(isLastOperator)
        {
        operantsArray.push(event.target.innerText);}
        else{
            operantsArray[operantsArray.length - 1]+= event.target.innerText; 
        }
     isLastOperator=false;
     operatorString+=event.target.innerText;
         

    }
    else
    if(event.target.getAttribute("role") === "submit")
    {
        console.log("submit");

    }
    else{
        
            if(!isLastOperator){
                operatorArray.push(event.target.innerText)
                operatorString+=event.target.innerText;
            }
            isLastOperator=true;
        }
        console.log(operantsArray,operatorArray)
    if(!operatorString){
        document.getElementById("operator_section").innerText=0;

    }else{
        document.getElementById("operator_section").
        innerText=operatorString;
    }
    document.getElementById("result_section").innerText=result;
    }