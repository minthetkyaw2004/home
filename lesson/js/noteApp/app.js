// class="card p-1 fs-3 m-2 mt-3 bg-success item"

let notes = [];
let notecount = 0;
let itemtest = document.getElementsByClassName('itemtest');


$('#addbtn').click(function(){
    let newItem = $('#note').val();

    document.querySelector('.itembox').innerHTML += `<h1 class="itemtest">${newItem}</h1>`;
    // console.log(itemtest[notecount]);

    switch (notecount % 3){
        case 0:
            console.log(1);
            // itemtest[notecount].setAttribute('style','color: red;');
            itemtest[notecount].setAttribute('style','width: 100%; background: red;');
            break;
        case 1:
            console.log(2);
            itemtest[notecount].setAttribute('style','width: 50%; background: blue;');
            break;
        case 2:
            console.log(3);
            itemtest[notecount].setAttribute('style','width: 33%; background: green;');
            break;
    }

    notecount++;
});



