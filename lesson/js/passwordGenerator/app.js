let numbers = '0123456789';
let smalls = 'abcdefghijklmnopqrstuvwxyz';
let capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let digits = numbers.split('');
let smallletters = smalls.split('');
let capitalletters = capitals.split('');
let numSmall = (numbers + smalls).split('');
let numCap = (numbers + capitals).split('');
let letters = (smalls + capitals).split('');
let all = (numbers + smalls + capitals).split('');

let pwlength = document.getElementById('length');
let pw = [];

let random = ( min, max ) => Math.floor( ( Math.random() * ( max - min ) ) + min );

function generatepw(arraytype){
    for(let count = 0; count < pwlength.value; count++){ pw.push(arraytype[random(0, arraytype.length-1)]); }
    document.querySelector('#output').innerText = pw.join('').toString();
    pw = [];
}   

let small = document.getElementById('small');
let capital = document.getElementById('capital');
let number = document.getElementById('number');

function work(){
    if(small.checked == true){
        if(capital.checked == true){
            if(number.checked == true){ generatepw(all); }
            else{ generatepw(letters); }
        }
        else if(number.checked == true){ generatepw(numSmall); }
        else{ generatepw(smallletters); }
    }
    else if(capital.checked == true){
        if(number.checked == true){ generatepw(numCap); }
        else{ generatepw(capitalletters); }
    }
    else if(number.checked == true){ generatepw(digits); }
    else{ 
        if(pwlength.value==''){ document.querySelector('#output').innerText = 'no pw length selected' }
        else{ document.querySelector('#output').innerText = 'no content selected' }
     }
}
