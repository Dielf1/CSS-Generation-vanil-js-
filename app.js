let rengeTl = document.getElementById('tlr')
let rengeTr = document.getElementById('trr')
let rengeBl = document.getElementById('blr')
let rengeBr = document.getElementById ('brr')

let rengeSh = document.getElementById('sh')
let rengeOp = document.getElementById('op')



let resultTl = document.getElementById('result-tlr')
let resultTr = document.getElementById('result-trr')
let resultBl = document.getElementById('result-blr')
let resultBr = document.getElementById('result-brr')

let resultSh = document.getElementById('result-sh')
let resultOp = document.getElementById('result-op')




let inputs = document.querySelectorAll('.input')
let cube = document.getElementById('cube')
let total = document.getElementById('total-result')
let btn = document.getElementById('btn')




function changeRadius() {
        resultTl.innerHTML = rengeTl.value
        resultTr.innerHTML = rengeTr.value
        resultBl.innerHTML = rengeBl.value
        resultBr.innerHTML = rengeBr.value
        resultSh.innerHTML = rengeSh.value
        resultOp.innerHTML = rengeOp.value

        cube.style.borderRadius = rengeTl.value + 'px ' + rengeTr.value + 'px ' + rengeBr.value + 'px ' + rengeBl.value + 'px'
        cube.style.boxShadow = rengeOp.value + 'px ' + 0 + 'px ' + rengeSh.value + 'px ' + rengeOp.value + 'px'
       

}

for (input of inputs) {
input.addEventListener('input' , changeRadius)
}


function totalResult() {
    total.innerHTML = 'border-radius: ' + cube.style.borderRadius + ';'+ '<br/>' + "box-shadow: " + cube.style.boxShadow +';' + '<br/>' 
}

btn.addEventListener('click', totalResult)