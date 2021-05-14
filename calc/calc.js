var operation = /** @class */ (function () {
    function operation() {
        this.num1 = 0;
        this.num2 = 0;
        this.oper = '';
        this.ans = 0;
    }
    return operation;
}());
var currOper = new operation();
function numberClicked(num) {
    var field = document.getElementById('output');
    if (!(num == 0 && field.value == '0')) {
        if (field.value != '0')
            field.value = field.value + num.toString();
        else
            field.value = num.toString();
    }
}
function operationClicked(op) {
    currOper.num1 = +document.getElementById('output').value;
    currOper.oper = op;
    document.getElementById('output').value = "0";
    document.getElementById('num1').innerHTML = (currOper.num1).toString() + op;
}
function clearFields() {
    currOper.num1 = 0;
    currOper.num2 = 0;
    currOper.oper = '';
    document.getElementById('num1').innerHTML = '‎';
    document.getElementById('output').value = '0';
}
function submitOperation() {
    currOper.num2 = +document.getElementById('output').value;
    var fnum = currOper.num1;
    var nnum = currOper.num2;
    var answ;
    switch (currOper.oper) {
        case '+':
            answ = fnum + nnum;
            break;
        case '-':
            answ = fnum - nnum;
            break;
        case '*':
            answ = fnum * nnum;
            break;
        case '/':
            answ = fnum / nnum;
            break;
        case '%':
            answ = fnum % nnum;
            break;
    }
    currOper.ans = answ;
    document.getElementById('output').value = answ.toString();
    document.getElementById('num1').innerHTML = '‎';
    addHistory();
}
function addHistory() {
    var table = document.getElementById("hist");
    var row = document.createElement('tr');
    // Add some text to the new cells:
    row.innerHTML = currOper.num1 + ' ' + currOper.oper + ' ' + currOper.num2 + ' = ' + currOper.ans;
    table.insertBefore(row, table.firstChild);
    clearFields();
}
