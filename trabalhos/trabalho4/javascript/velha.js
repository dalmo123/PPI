var tabuleiro;
var aviso;
var jogador;

window.onload = function () {
  criarTabela;
}

function criarTabela() {
  tabuleiro = new Array(3);
  aviso = document.getElementById('aviso');
  jogador = 1;

  for (let i = 0; i < 3; i++)
    tabuleiro[i] = new Array(3);

  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++)
      tabuleiro[i][j] = 0;

  const board = document.getElementById('board');

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.addEventListener('click', () => {
        if (tabuleiro[i][j] === 0) { // Verifique se a célula está vazia
          fazerJogada(i, j, cell); 
          atualizaMensagem();
        }
      });
      board.appendChild(cell);
    }
  }

  atualizaMensagem();
}

function inicia() {
  criarTabela();
}

function fazerJogada(linha, coluna, cell) {
  if (tabuleiro[linha][coluna] === 0) {
    tabuleiro[linha][coluna] = jogador;
    cell.textContent = jogador === 1 ? 'X' : 'O';
    checa();
    jogador *= -1;
    cell.classList.add(jogador === 1 ? 'x-cell' : 'o-cell');
  }

  atualizaMensagem();
}

function checa() {
  var soma;

  // Inicializa o jogador vencedor como 0 (nenhum jogador)
  var jogadorVencedor = 0;

  // Linhas
  for (let i = 0; i < 3; i++) {
    soma = 0;
    soma = tabuleiro[i][0] + tabuleiro[i][1] + tabuleiro[i][2];

    if (soma === 3 || soma === -3) {
      jogadorVencedor = tabuleiro[i][0] === 1 ? 1 : 2;
      break; // Sai do loop assim que um vencedor for encontrado
    }
  }

  // Se nenhum vencedor foi encontrado nas linhas, verifica colunas
  if (jogadorVencedor === 0) {
    for (let i = 0; i < 3; i++) {
      soma = 0;
      soma = tabuleiro[0][i] + tabuleiro[1][i] + tabuleiro[2][i];

      if (soma === 3 || soma === -3) {
        jogadorVencedor = tabuleiro[0][i] === 1 ? 1 : 2;
        break; // Sai do loop assim que um vencedor for encontrado
      }
    }
  }

  // Se ainda nenhum vencedor foi encontrado, verifica diagonais
  if (jogadorVencedor === 0) {
    soma = 0;
    jogadorVencedor = 0;
    soma = tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2];
    if (soma === 3 || soma === -3) {
      jogadorVencedor = tabuleiro[0][0] === 1 ? 1 : 2;
    }
  }

  if (jogadorVencedor === 0) {
    soma = 0;
    soma = tabuleiro[0][2] + tabuleiro[1][1] + tabuleiro[2][0];
    if (soma === 3 || soma === -3) {
      jogadorVencedor = tabuleiro[0][2] === 1 ? 1 : 2;
    }
  }

  // Verifica empate
  if (jogadorVencedor === 0 && tabuleiro.flat().every((valor) => valor !== 0)) {
    jogadorVencedor = -1; // Define -1 para empate
  }

  // Exibe o jogador vencedor ou aviso de empate
  if (jogadorVencedor === 1 || jogadorVencedor === 2) {
    document.getElementById('resultado').innerHTML = "Jogador " + jogadorVencedor + " ganhou!";
  } else if (jogadorVencedor === -1) {
    document.getElementById('resultado').innerHTML = "EMPATEEE! O jogo acabou..";
  }
}

function reiniciar() {
  document.getElementById('resultado').innerHTML = '';
  const board = document.getElementById('board');
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }

  criarTabela();
}

function atualizaMensagem() {
  aviso.innerHTML = "Vez do jogador: " + (jogador === 1 ? 'X' : 'O');
}

