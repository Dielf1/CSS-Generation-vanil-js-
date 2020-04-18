let rengeTl = document.getElementById('tlr')
let rengeTr = document.getElementById('trr')
let rengeBl = document.getElementById('blr')
let rengeBr = document.getElementById ('brr')

let resultTl = document.getElementById('result-tlr')
let resultTr = document.getElementById('result-trr')
let resultBl = document.getElementById('result-blr')
let resultBr = document.getElementById('result-brr')



let inputs = document.querySelectorAll('.input')
let cube = document.getElementById('cube')
let total = document.getElementById('total-result')
let btn = document.getElementById('btn')



function changeRadius() {
        resultTl.innerHTML = rengeTl.value
        resultTr.innerHTML = rengeTr.value
        resultBl.innerHTML = rengeBl.value
        resultBr.innerHTML = rengeBr.value

        cube.style.borderRadius = rengeTl.value + 'px ' + rengeTr.value + 'px ' + rengeBr.value + 'px ' + rengeBl.value + 'px'

}

for (input of inputs) {
input.addEventListener('input' , changeRadius)
}


function totalResult() {
    total.innerHTML = 'border-radius: ' + cube.style.borderRadius
}

btn.addEventListener('click', totalResult)