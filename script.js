let input='',
input1,
input2,
answer,
operator;
let numbers=document.querySelectorAll('.numbers');
let theScreen=document.querySelector('#screen');
let point=document.querySelector('#point');
let backSpace=document.querySelector('#backSpace');
let percentage=document.querySelector('#percentage');
function add(){
    return answer=input1+input2;
};
function subtract(){
    return answer=input1-input2;
};
function multiply(){
    return answer=input1*input2;
}
function divide(){
    return answer=input1/input2;
}
numbers.forEach((number)=>{
    number.addEventListener('click',(e)=>{
        input+=e.target.textContent;
        theScreen.textContent=`${input}`;
        return input;
    })
})
let operators=document.querySelectorAll('.operator');
operators.forEach((op)=>{
    op.addEventListener('click',(e)=>{
        input1= Number(input);
        input='';
        theScreen.textContent=e.target.textContent;
        operator=e.target.textContent;
        point.removeAttribute('disabled');
        return operator,input1,input;
    });
});
let equalSign=document.querySelector('#equal');
equalSign.addEventListener('click',(e)=>{
    input2= Number(input);
    if (operator=='+'){
        add();
        input=answer.toString();
        theScreen.textContent=`${input}`;
    }
    else if(operator=='-'){
        subtract();
        input=answer.toString();
        theScreen.textContent=`${input}`;
    }
    else if(operator=='*'){
        multiply();
        input=answer.toString();
        theScreen.textContent=`${input}`;
    }
    else if(operator=='/'){
        divide();
        input=answer.toString();
        theScreen.textContent=`${input}`;
    }
    point.removeAttribute('disabled');
})
let clear=document.querySelector('#Clear')
clear.addEventListener('click',()=>{
    input='';
    theScreen.textContent='';
});
point.addEventListener('click',()=>{
    input=`${input}.`
    theScreen.textContent=`${input}`
    point.setAttribute('disabled','disabled')
})
backSpace.addEventListener('click',()=>{
    input=input.toString();
    input=input.split('');
    input.pop();
    input=input.join('');
    theScreen.textContent=`${input}`
})
percentage.addEventListener('click',()=>{
    input=Number(input)/100
    theScreen.textContent=`${input}`
})
if(answer===NaN){
    theScreen.textContent=`Syntax Error`
}