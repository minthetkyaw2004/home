let d = new Date();
let hourbox = document.getElementById('hourbox');
let minbox = document.getElementById('minbox');
let secbox = document.getElementById('secbox');


setInterval(function(){

    let d = new Date();
    let day = d.getDate();
    let month = Number(d.getMonth()) + 1;
    let year = d.getFullYear();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let wday = d.getDay();



    // calendar

    let monthbox = document.getElementById('month');

    switch (month) {
        case 1:
            monthbox.innerText = 'January';
            break;
        case 2:
            monthbox.innerText = 'February';
            break;
        case 3:
            monthbox.innerText = 'March';
            break;
        case 4:
            monthbox.innerText = 'April';
            break;
        case 5:
            monthbox.innerText = 'May';
            break;
        case 6:
            monthbox.innerText = 'June';
            break;
        case 7:
            monthbox.innerText = 'July';
            break;
        case 8 :
            monthbox.innerText = 'August';
            break;
        case 9 :
            monthbox.innerText = 'September';
            break;
        case 10:
            monthbox.innerText = 'October';
            break;
        case 11:
            monthbox.innerText = 'November';
            break;
        case 12:
            monthbox.innerText = 'December';
    }

    document.getElementById('year').innerText = year;

    document.getElementById('daybox').innerText = day;

    let weekday = document.getElementById('weekday');

    switch (wday) {
        case 1:
            weekday.innerText = 'Monday';
            break;

        case 2:
            weekday.innerText = 'Tuesday';
            break;

        case 3:
            weekday.innerText = 'Wednesday';
            break;

        case 4:
            weekday.innerText = 'Thursday';
            break;

        case 5:
            weekday.innerText = 'Friday';
            break;

        case 6:
            weekday.innerText = 'Saturday';
            break;

        case 7:
            weekday.innerText = 'Sunday';
            break;
        
        default:
            console.log('I am a day');
            break;
    }

    // circle clock

    let hourclock = (hour * 30) + (min * 0.5);
    let minuteclock = (min * 6) + (sec * 0.1);
    let secclock = (sec * 6)
    document.getElementById('hourhand').style.transform = `rotate(${hourclock}deg)`;
    document.getElementById('minhand').style.transform = `rotate(${minuteclock}deg)`;
    document.getElementById('sechand').style.transform = `rotate(${secclock}deg)`;


    // box clock

    hourbox.innerText = hour.toString().padStart(2,'0') + " : ";
    minbox.innerText = min.toString().padStart(2,'0') + " : ";
    secbox.innerText = sec.toString().padStart(2,'0');

    if (hour < 12){
        document.getElementById('night').style.display = "none";
    }
    else{
        let currenthour = hour - 12;
        hourbox.innerText = currenthour.toString().padStart(2,'0') + " : ";
        document.getElementById('day').style.display = "none";
    }

},1000);

let oddMonths = [0,2,4,6,7,9,11];
let oddMonth = d.getMonth();
if(oddMonths.includes(oddMonth)){
    thisMonth = 31;
}else if(oddMonth === 1){
    thisMonth = 28
}else{
    thisMonth = 30;
}

let messagebox = document.querySelector('#messagebox');
function calc(){
    let calcday = d.getDate();
    // calcday = 2;
    if(calcday <= 5){
        messagebox.style.fontSize = '18px';
        messagebox.innerHTML += dayOnes.mencase + '<br/><br/>';
        messagebox.innerHTML += doOnes.mencase + '<br/><br/>';
        messagebox.innerHTML += avoidOnes.mencase + '<br/><br/>';
        messagebox.innerHTML += thinkOnes.mencase + '<br/><br/>';
    }
    else if(calcday > 5 && calcday <= 15){
        messagebox.innerHTML += dayOnes.freecase + '<br/><br/>';
        messagebox.innerHTML += doOnes.freecase + '<br/><br/>';
        messagebox.innerHTML += avoidOnes.freecase + '<br/><br/>';
        messagebox.innerHTML += thinkOnes.freecase + '<br/><br/>';
    }
    else{
        messagebox.innerHTML += (thisMonth - Number(d.getDate())) + dayOnes.drinkcase + '<br/><br/>';
        messagebox.innerHTML += doOnes.drinkcase + '<br/><br/>';
        messagebox.innerHTML += avoidOnes.drinkcase + '<br/><br/>';
        messagebox.innerHTML += thinkOnes.drinkcase + '<br/><br/>';
    }
}
// calc();

let gettime = d.getHours();
if(gettime>=18){
    document.body.className = 'night';
}else{
    document.body.className = 'day';
}


