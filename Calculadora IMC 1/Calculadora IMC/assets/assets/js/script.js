const form = document.getElementById("form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;

    const bmi = (peso / (altura * altura)).toFixed(2);

    const value = document.getElementById("value");
    let descricao = "";

    document.getElementById("infos").classList.remove("hidden");

    if (bmi < 18.5){
        descricao = "Cuidado! Você está abaixo do peso!"
    }else if (bmi >=18.5 && bmi <= 25){
        descricao = "Você está no peso ideal!";
    }else if (bmi > 25 && bmi <= 30){
        descricao = "Cuidado! Você está com sobrepeso!";
    }else if (bmi > 30 && bmi <=35){
        descricao = "Cuidado! Você está com obesidade moderada!";
    }else if (bmi > 35 && bmi <=40){
        descricao = "Cuidado! Você está com obesidade severa!";
    }else{
        descricao = "Cuidado! Você está com obesidade mórbida";
    }

    value.textContent = bmi.replace(".", ",");
    document.getElementById("descricao").textContent = descricao;


});