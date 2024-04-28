
var pontuacaoX = 0;
var pontuacaoO = 0;
var iniciou = false;
const JogadorAtual = document.getElementById('jogadorAtual');
const MostrarJogadorAtual = document.getElementById("MostrarJogadorAtual").textContent = JogadorAtual.classList;

function marcarJogada(elemento){
    const button = elemento.currentTarget;

    if(button.textContent === ''){
        if(JogadorAtual.classList.contains("X")){
            button.textContent = "X";       
        } else{
            button.textContent = "O";
        }
        regraJogo();
    }else{
        
    }

}

function alteraJogador() {

    if(JogadorAtual.classList.contains("X")){
        JogadorAtual.classList.remove("X")
        JogadorAtual.classList.add("O")
        const MostrarJogadorAtual = document.getElementById("MostrarJogadorAtual").textContent = JogadorAtual.classList;
    } else {
        JogadorAtual.classList.remove("O")
        JogadorAtual.classList.add("X")
        const MostrarJogadorAtual = document.getElementById("MostrarJogadorAtual").textContent = JogadorAtual.classList;
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
    } else{
        alteraJogador();
        iniciou = true;
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

    // Soma os pontos
    if(document.getElementById('jogadorAtual').classList.contains("X")){
        pontuacaoX ++;
        document.getElementById("pontuacaoX").textContent = pontuacaoX.toString();
    } else{
        pontuacaoO ++;
        document.getElementById("pontuacaoO").textContent = pontuacaoO.toString();        
    }

    // Limpa o jogo para iniciar novamente
        // Limpa o jogo para iniciar novamente
        setTimeout(function() {
            var cofirmGanhar = confirm("Jogador " + JogadorAtual.classList + " ganhou. \nParabéns!");
            if(cofirmGanhar == true){
                var limparJogo = document.querySelectorAll(".opcao");
                limparJogo.forEach(function(elemento) {
                    elemento.classList.remove("X");

                    elemento.classList.remove(linha);
                    document.getElementById('tabelaJogo').classList.remove(linha);
                    elemento.classList.remove("O");
                    elemento.classList.remove("ganhou");
                    elemento.textContent = "";
                    iniciou = false;
                    alteraJogador();
                });
            } else{
                Reinicia();
            }
        }, 100); // Delay de 100 milissegundos



}


// Botão Alterar inicio
document.getElementById("AlteraInicio").addEventListener('click', AlteraInicio);

function AlteraInicio() {
    if(iniciou == false){
        alteraJogador();
    }
}

// Reinicia
document.getElementById("Reinicia").addEventListener('click', Reinicia);
function Reinicia(){
    location.reload();
}