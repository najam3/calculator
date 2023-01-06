const firstOperand = document.querySelector('[data-first-operand]');
const secondOperand = document.querySelector('[data-second-operand]');
const numbersParent = document.querySelector('.calculator-numbers')
let target = numbersParent.children;

    let expression = ""
    
    for (let i = 0; i < target.length; i++) {
       target[i].addEventListener("click", (e) => {
        const text = e.target.innerText;
        const pi = e.target.id
        if(text !== undefined) {
        if(text == 'AC'){
          expression = "";
          secondOperand.innerText = "";
          return true;
        } else if(text == "sin"){
          expression = Math.sin(expression);
        } else if(text == 'tan') {
          expression = Math.tan(expression);
        } else if(text == "cos") {
          expression = Math.cos(expression)
        } else if(text == 'log') {
          expression = Math.log(expression);
        }  else if(text == 'sqrt') {
        expression =  Math.sqrt(expression)
        }  else if(text == 'e') {
          expression =  Math.sqrt(expression)
          } 
         else if(text == "=") {
          const answer = eval(expression)
          expression = answer
        } else if(text == "x^2"){
         expression = expression * expression
        }     else if(text == 'rnd') {
          expression =  Math.round(expression)
          } 
        
        else if(text == "DEL") {
          if(expression.length > 0)
          expression = expression.slice(0, -1);
        }  else if(expression == "=" && text.includes("=")) {
          error()
        } else if(expression == "-" && text.includes("-")) {
          error();
          
        }else if(expression == "." && text.includes(".")) {
          error();
        }
        else if(expression == "/" && text.includes("/")) {
          error();
        }else if(expression == "%" && text.includes("%")) {
          error();
        }else if(expression == "+" && text.includes("+")) {
          error();
        }else if(expression == "**" && text.includes("**")) {
          error();
        }else if(expression == "*" && text.includes("*")) {
          error();
        }else if(expression == "%" && text.includes("/")){
          error();
        }else if(expression == "%" && text.includes("+")){
          error();
        }
        else {
          expression += text;
        }
        if(expression == undefined) {
          expression = "";
          secondOperand.innerText = "";
        } 
        
        else {
          secondOperand.innerText = expression;
        } 
       

        }
         });    
    }

  

   const error = () =>  expression = "ERROR"


    
  




  


