let projectName = ["card-project","areacalculator","calculator","d"]
let projectLink = ["cardproject","areacalculator","calculator","d"]
let projectFeature = ["1","2","3","4"]

let table = document.getElementById("table")

for(let i=0; i<=projectName.length-1; i++ ){
    if(i%2==0){
        tIndex = `<td class="colodd">`+(i+1)+`</td>`
        tName = `<td class="coleven">`+projectName[i]+`</td>`
        tLink = `<td class="colodd"><a href="../../${projectLink[i]}/html/${projectLink[i]}.html">`+projectLink[i]+`</a></td>`
        tFeature = `<td class="coleven">`+projectFeature[i]+`</td>`
        tInfo= `<tr class="rowodd">`+ tIndex + tName + tLink + tFeature + `</tr>`
        table.innerHTML += tInfo
    }
    else{
        tIndex = `<td class="coleven">`+(i+1)+`</td>`
        tName = `<td class="colodd">`+projectName[i]+`</td>`
        tLink = `<td class="coleven"><a href="../../${projectLink[i]}/html/${projectLink[i]}.html">`+projectLink[i]+`</a></td>`
        tFeature = `<td class="colodd">`+projectFeature[i]+`</td>`
        tInfo= `<tr class="roweven">`+ tIndex + tName + tLink + tFeature + `</tr>`
        table.innerHTML += tInfo
    }
}