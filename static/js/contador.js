let contador = 0;

const numero = document.getElementById("clientes");

const intervalo = setInterval(() => {

    contador += 5;

    numero.textContent = contador;

    if(contador >= 500){
        clearInterval(intervalo);
    }

}, 20);