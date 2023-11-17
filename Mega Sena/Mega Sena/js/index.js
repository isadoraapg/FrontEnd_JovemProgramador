
const numerosApostados = [];
const resultado = [];
let qtdAcertos= 0;



const btnApostar = document.getElementById("btnApostar");
btnApostar.disabled = true;



sortearNumeros();



function sortearNumeros(){
    
    for(i = 0; i < 6; i++){
        let numeroSorteado = Math.round(Math.random() * 59 + 1 );

        
        while(resultado.includes(numeroSorteado)){
            let numeroSorteado = Math.round(Math.random() * 59 + 1 );
        }
        resultado.push(numeroSorteado);
    }   
}

function selecionarNumeros(numero){
   if(numerosApostados.length >= 0 && numerosApostados.length < 6){
      
        numerosApostados.push(numero);

        
        desabilitarNumeroEscolhido(numero);

        
        if(numerosApostados.length > 5){
            btnApostar.disabled = false;
        }

        
        const qtdApostas = document.getElementById("qtdNumeros");
        qtdApostas.innerHTML = "<p>Qtd Números</p>" + numerosApostados.length + "</p>";
   }
}

function desabilitarNumeroEscolhido(numero){
    document.getElementById("num_" + numero).disabled = true;
    document.getElementById("num_" + numero).style.background = "#009e4c";
    document.getElementById("num_" + numero).style.color = "#ffffff";
}



function apostar(){
    
    for(i = 0; i < numerosApostados.length; i++){
        if(resultado.includes(numerosApostados[i])){
            qtdAcertos++;
        }
    }
    
    
    const divResultado = document.getElementById("resultado");
    for(i = 0; i < resultado.length; i++){
        divResultado.innerHTML += "<div class='resultadoCircle'>"+ resultado[i] +"</div>";
    }

    
    let divAcertos = document.getElementById("acertos")
    divAcertos.innerHTML = "<p>Acertos</p><p class='valor'>" + qtdAcertos + "</p>"
    

    desabilitarTodosNumeros();

    document.getElementById("btnReiniciar").style.display = 'inline';
}

function desabilitarTodosNumeros(){
    for(i = 1; i <= 60; i++){
        document.getElementById("num_"+ i).disabled= true;
    }
}

let btn = document.querySelector("#btnReiniciar");
btn.addEventListener("click", function(){
    location.reload();
});


