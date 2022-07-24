function insertNewRow(number,value){

    let cell1 = `<td id="number${number}">${number}</td>`;
    let cell2 = `<td class="valueTd" id="value${number}"><span>${value}</span><em>Tap to edit</em></td>`;
    let cell3 = `<td>5</td>`;
    let row = `<tr>`+cell1+cell2+cell3+`</tr>`;

    $('#tbody').append(row);
}

function modifyRow(number,value){

    let valueNow = `dataObject.number${number}`;
    let z = eval(valueNow);

    $(`#value${number} > span`).text(z);    

}

function clearForm(){

    document.getElementById('number').value = '';
    document.getElementById('value').value = '';

}

$(document).ready(function(){

    $('#insertValue').click(function(e){

        e.preventDefault();

        let valueNow = `dataObject.number${$('#number').val()}`;
        let z = eval(valueNow);

        insertValue($('#number').val(),$('#value').val());
        
        if(z != undefined){
            modifyRow($('#number').val(),$('#value').val());
        }else{
            insertNewRow($('#number').val(),$('#value').val());
        }

        clearForm();

    });

});
