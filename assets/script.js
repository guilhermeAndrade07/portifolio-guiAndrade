function efeitoEscrever(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 170 * i);
    });
}

const nome = document.querySelector('#nome');
nome.innerHTML = 'Guilherme Andrade'; 
efeitoEscrever(nome);