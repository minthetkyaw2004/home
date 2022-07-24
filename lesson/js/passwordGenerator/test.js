let pwlength = 6;
let pw = [];
for(let pwcount=0;pwcount<pwlength; pwcount++){

    let randomNumber = Math.floor(Math.random()*10);
    // console.log(`pwcount ${pwcount} = ${randomNumber}`);
    pw.push(randomNumber);

}
// console.log(pw.join('').toString());
// document.write(pw.join('').toString());
let alphabetsmall = 'abcdefghijklmnopqrstuvwxyz';
let alphabetcapital = alphabetsmall.toLocaleUpperCase();
let alphabets = (alphabetsmall + alphabetcapital).split('');
// console.log(alphabets.length);

let random = ( min , max) => Math.floor( ( Math.random() * ( max - min ) ) + min );

console.log(alphabets[random(0, alphabets.length-1)]);
console.log(alphabetsmall[random(0, alphabetsmall.length-1)]);
console.log(alphabetcapital[random(0, alphabetcapital.length-1)]);
console.log(pw[random(0,pw.length-1)]);