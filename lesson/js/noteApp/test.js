let newnote = document.getElementById('note');
let notes = [];
let count = 0;

$('#addbtn').click(function(){
    $('.itembox').append(`<div class="card p-1 fs-3 col-12 col-md-5 col-lg-3 m-2 mt-3 bg-success item">${newnote.value}</div>`);
    notes.push(newnote.value);
    count++;
});

$('.item').click(function(){
    // console.log($(this).textContent);
    this.remove();
});



