
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {message:"Enter first Number",type:"number",name:"firstNumber"},
    {message:"Enter second Number", type:"number",name:"secondNumber"},
    {message:"Select one of the operator to preform operation",
    type:"list",
    name : "operator",
    choices:["Addition", "subtraction", "multiplication", "division"]

}]);

if(answer === "operator"){
    console.log(answer.firstNumber + answer.secondNumber )
}else if(answer === "operator"){
    console.log(answer.firstNumber - answer.secondNumber)
}else if(answer === "operator"){
    console.log(answer.firstNumber * answer.secondNumber)

}else if(answer === "operator"){
    console.log(answer.firstNumber / answer.secondNumber)
}else{
    console.log("please enter vild value")
}