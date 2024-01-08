let input='',
input1,
input2,
answer,
operator;
let numbers=document.querySelectorAll('.numbers');
let theScreen=document.querySelector('#screen');
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
})
let clear=document.querySelector('#Clear')
clear.addEventListener('click',()=>{
    input='';
    theScreen.textContent='';
});