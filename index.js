window.addEventListener('load', main());

function main(){

}

function marcarJogada(elemento){
    const button = elemento.currentTarget;
    const JogadorAtual = document.getElementById('jogadorAtual');

    if(button.textContent === ''){
        if(JogadorAtual.classList.contains("X")){
            button.textContent = "X";       
        } else{
            button.textContent = "O";
        }
        regraJogo()
        alteraJogador(JogadorAtual)
    }else{
        
    }

}

function alteraJogador(JogadorAtual) {

    if(JogadorAtual.classList.contains("X")){
        JogadorAtual.classList.remove("X")
        JogadorAtual.classList.add("O")
    } else {
        JogadorAtual.classList.remove("O")
        JogadorAtual.classList.add("X")
    }
}

function regraJogo() {
    const button1r1d = document.getElementById('1r1d');
    const button1r2d = document.getElementById('1r2d');
    const button1r3d = document.getElementById('1r3d');
    const button2r1d = document.getElementById('2r1d');
    const button2r2d = document.getElementById('2r2d');
    const button2r3d = document.getElementById('2r3d');
    const button3r1d = document.getElementById('3r1d');
    const button3r2d = document.getElementById('3r2d');
    const button3r3d = document.getElementById('3r3d');

    if(button1r1d.textContent === button1r2d.textContent && button1r1d.textContent === button1r3d.textContent && button1r1d.textContent != ''){
        ganhou(button1r1d, button1r2d, button1r3d, 'ganhouHorizontal');
    } else if(button2r1d.textContent === button2r2d.textContent && button2r1d.textContent === button2r3d.textContent && button2r1d.textContent != ''){
        ganhou(button2r1d, button2r2d, button2r3d, 'ganhouHorizontal');
    } else if(button3r1d.textContent === button3r2d.textContent && button3r1d.textContent === button3r3d.textContent && button3r1d.textContent != ''){
        ganhou(button3r1d, button3r2d, button3r3d, 'ganhouHorizontal');
    } else if(button1r1d.textContent === button2r1d.textContent && button1r1d.textContent === button3r1d.textContent && button1r1d.textContent != ''){
        ganhou(button1r1d, button2r1d, button3r1d, 'ganhouVertical');
    } else if(button1r2d.textContent === button2r2d.textContent && button1r2d.textContent === button3r2d.textContent && button1r2d.textContent != ''){
        ganhou(button1r2d, button2r2d, button3r2d, 'ganhouVertical');
    } else if(button1r3d.textContent === button2r3d.textContent && button1r3d.textContent === button3r3d.textContent && button1r3d.textContent != ''){
        ganhou(button1r3d, button2r3d, button3r3d, 'ganhouVertical');
    } else if(button1r1d.textContent === button2r2d.textContent && button1r1d.textContent === button3r3d.textContent && button1r1d.textContent != ''){
        ganhou(button1r1d, button2r2d, button3r3d, 'ganhouDiagonal1');
    } else if(button1r3d.textContent === button2r2d.textContent && button1r3d.textContent === button3r1d.textContent && button1r3d.textContent != ''){
        ganhou(button1r3d, button2r2d, button3r1d, 'ganhouDiagonal2');
    }
}

function ganhou(btn1, btn2, btn3, linha) {
    if(linha !== "ganhouDiagonal1" && linha !== "ganhouDiagonal2"){
        btn1.classList.add('ganhou', linha);
        btn2.classList.add('ganhou', linha);
        btn3.classList.add('ganhou', linha);
    } else{
        btn1.classList.add('ganhou');
        btn2.classList.add('ganhou');
        btn3.classList.add('ganhou');
        const table = document.getElementById('tabelaJogo');
        table.classList.add(linha);
    }

}