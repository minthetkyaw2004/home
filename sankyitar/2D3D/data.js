let dataObject = {};
// if(localStorage.getItem('dataObject') != null){
//     dataObject = JSON.parse(localStorage.getItem('dataObject'))
// }else{
//     dataObject = {};
// }

for(let count = 0; count < 99; count++){

    let newOnes = `dataObject.number${count+1} = undefined`;
    eval(newOnes);
    
}

function insertValue(x,y){

    let index = `dataObject.number${x}`;
    let z = eval(index);
    
    if(z != undefined){

        y = Number(y) + Number(z);
        index = `dataObject.number${x}=${y};`;
        eval(index);

    }else{

        index = `dataObject.number${x}=${y};`;
        eval(index);

    }

}

    // let item = JSON.stringify(dataObject);
    // localStorage.setItem('dataObject',item);
    

