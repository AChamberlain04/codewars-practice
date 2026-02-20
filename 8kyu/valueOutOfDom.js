// Temperature Converter

document.querySelector('h1').addEventListener('click', convert);

function convert() {
    let inputVal = Number(document.querySelector('input').value);
    let temp = inputVal * 9 / 5 + 32;
    document.querySelector('h2').innerText = temp};