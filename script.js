function buttonclick(val)
{
    document.getElementById("screen").value+=val;
}
function cleardisplay(){
    document.getElementById("screen").value=""
}
  function calculateResult() {
    let expression = document.getElementById("screen").value;
    let result = eval(expression); 
    document.getElementById("screen").value = result;
  }
  function deleteLastCharacter() {
    let currentValue = document.getElementById("screen").value;
    document.getElementById("screen").value = currentValue.slice(0, -1);
  }
  