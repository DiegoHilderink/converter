//Iniciacion de parametros
var input;
var base;
var output;
var vocabulario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Generar codigo select
var miSelect = document.getElementById("base2");
var opt;

for (j = 2; j <= 36; j++) {
    opt = document.createElement("option");
    opt.setAttribute("value", j);
    opt.setAttribute("label", j);
    opt.setAttribute("id", j);
    miSelect.appendChild(opt);
    document.getElementById(j).innerHTML=j;
}


//Restricciones
function comprobarDecimales() {
    var patt = /\W+/;
    var aux = new RegExp(patt, 'gim');

    var pattBase = /([\*,\-,\+,\/]|[a-zA-Z])/;
    var auxBase = new RegExp(pattBase, 'gim');

    console.log(aux.test(input));
    console.log(aux.test(base));
    return !isNaN(input) && !isNaN(base) && !(aux.test(input)) && !(auxBase.test(base));
}

function comprobarBase() {
    for (i = base - 10; i < vocabulario.length; i++) {
        if (input.indexOf(vocabulario[i]) > -1) {
            return true;
        }
    }
    return false;
}

//funcion de decimal a una base
function decimal() {
    input = document.getElementById("input1").value;
    base = document.getElementById("base1").value;

    if (comprobarDecimales()) {
        input = parseInt(input);
        base = parseInt(base);
        output = input.toString(base);
        document.getElementById("output1").innerHTML = output;
    } else {
        document.getElementById("output1").innerHTML = '"Uno de los dos valores no es numérico"';
    }
}



//funcion de base a decimal
function otraBase() {
    input = document.getElementById("input2").value;
    base = parseInt(document.getElementById("base2").value);

    if (base == "vacio" && input == "") {
        document.getElementById("output2").innerHTML = 'El campo no puede estar vacio';
        console.log(output);
    } else if (base > 10) {
        if (comprobarBase()) {
            document.getElementById("output2").innerHTML = 'La base no corresponde con el valor';
            console.log(output);
        } else {
            output = parseInt(input, base)
            document.getElementById("output2").innerHTML = output;
            console.log(output);
        }
    } else if(!comprobarDecimales()){
        document.getElementById("output2").innerHTML = 'La base no corresponde con el valor';
    } else{
        var bin = parseInt(input);
        var bass = parseInt(base);
        output = parseInt(bin, bass)
        document.getElementById("output2").innerHTML = output;
        console.log(output);
    }
}