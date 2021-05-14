
class operation{
    num1: number
    num2:number
    oper:string
    ans: number
    constructor (){
        this.num1=0;
        this.num2=0;
        this.oper='';
        this.ans=0;
    }
}
var currOper = new operation();
function numberClicked(num: number){
    let field =document.getElementById('output') as HTMLInputElement;
    if(!(num==0&&field.value=='0')){
        if(field.value!='0')
        field.value = field.value +num.toString();
        else
        field.value = num.toString();
    }
}
function operationClicked(op: string){ 
    currOper.num1 = +(document.getElementById('output') as HTMLInputElement).value;
    currOper.oper = op;
    (document.getElementById('output') as HTMLInputElement).value ="0";
    document.getElementById('num1').innerHTML= (currOper.num1).toString()+op;
}
function clearFields(){
    currOper.num1=0;
    currOper.num2=0;
    currOper.oper = '';
    document.getElementById('num1').innerHTML= '‎';
    (document.getElementById('output') as HTMLInputElement).value ='0';
}
function submitOperation(){
    currOper.num2 = +(document.getElementById('output') as HTMLInputElement).value;
    let fnum = currOper.num1;
    let nnum =currOper.num2;
    let answ:number;
    switch(currOper.oper){
        case '+':
            answ = fnum+nnum;
            break;
        case '-':
            answ = fnum-nnum;
            break;
        case '*':
            answ = fnum*nnum;
            break;
        case '/':
            answ = fnum/nnum;
            break;
        case '%':
            answ = fnum%nnum;
            break;

    }
    currOper.ans=answ;
    (document.getElementById('output') as HTMLInputElement).value=answ.toString();
    document.getElementById('num1').innerHTML= '‎';
    addHistory();
}
 function addHistory(){
    var table = document.getElementById("hist");
    var row = document.createElement('tr');
    
    // Add some text to the new cells:
    row.innerHTML  = currOper.num1+' '+currOper.oper+' '+currOper.num2+' = '+currOper.ans;
    table.insertBefore(row,table.firstChild);
    clearFields();
 }