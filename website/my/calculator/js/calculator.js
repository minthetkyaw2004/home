let displayBox = document.getElementById("displaytext");
let keypad = document.querySelector(".numberpad")
let operators = ['+','-','*','/','%']

function filter(x){

    let current = displayBox.innerText

    if(current == '0'){
        if(x != '.'){
            clearLast()
        }
    }
    if(operators.includes(current)){
        clearLast()
    }

    if(operators.includes(x) && operators.includes(current[current.length-1])){
        return false;
    }

    return true;
}

function calcTest(){
    if(operators.includes(displayBox.innerText[displayBox.innerText.length-1])){
        return false;
    }

    else{
        return true;
    }
}
function display(x){
    if(filter(x)){
        displayBox.innerText += x
    }
}

function secret(){
    for(let i=1; i<=1500; i++){
        if(i%2 == 0){
            console.log(i + '. ချစ်တယ် 💖 i love you very much ကလေးမလေး')
        }else{
            console.log(i + '. ချစ်တယ် 🖤 i love you very much ချစ်တုံး')
        }
    }
}

function calc(){

    if(displayBox.innerText == '31122021'){
        secret();
        displayBox.innerText = 'Check the console.'
    }

    if(displayBox.innerText == '143'){
        displayBox.innerText = 'I love you 🤍'
    }

    if(calcTest() == true){
        displayBox.innerText = eval(displayBox.innerText)
    }

    else{
        displayBox.innerText = 'not complete'
    }

}

function clearAll(){
    displayBox.innerText = ''
}

function clearLast(){
    displayBox.innerText = displayBox.innerText.substring(0,displayBox.innerText.length-1)
}

function lightmode(){
    document.getElementById("body").classList.toggle("lbody")
}