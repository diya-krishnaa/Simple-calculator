// content inside calculator screen
function displayContent(content){
    result.value+=content
}
// clear calc screen
function clearCalcScreen(){
    result.value=""
}
function displayResult(){
    result.value= eval(result.value)
}
function removeLastDigit(){
    result.value=result.value.slice(0,-1)
}