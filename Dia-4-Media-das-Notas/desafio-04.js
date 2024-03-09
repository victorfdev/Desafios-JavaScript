
alert('Vamos calcular a média das suas notas ?');

let p1 = parseFloat(prompt("Insira a sua primeira nota:").replace(',','.'));
let p2 = parseFloat(prompt("Insira a sua segunda nota:").replace(',','.'));
let p3 = parseFloat(prompt("Insira a sua terceira nota:").replace(',','.'));


let media = (p1 + p2 + p3) / 3;
    
alert(`A sua média é ${media.toFixed(2)}`);




