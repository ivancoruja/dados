/* Jogo de Dados! */

const prompt = require("prompt-sync")();

while (true) {

    console.log('Jogo de Dados!');
    console.log();

    let nplayers = 0;
    let nmatches = 0;
    let player = {};
    let players = [];
    let matchHeader = String();
    let playerHeader = String();
    let playerFooter = String();
    let die = 0;
    let matchRolls = [];
    let matchMax = 0;
    let p = 0;
    let m = 0;

    nplayers = prompt('Quantos jogadores? ')
    while (isNaN(nplayers) || nplayers === '') {
        console.log('Digite apenas números!')
        nplayers = prompt('Quantos jogadores? ')
    } nplayers = parseInt(nplayers);

    nmatches = prompt('Quantas rodadas? ')
    while (isNaN(nmatches) || nmatches === '') {
        console.log('Digite apenas números!')
        nmatches = prompt('Quantas rodadas? ')
    }

    for (; p < nplayers; p++) {
        console.clear();
        player.playerNum = p + 1;
        player.playerName = prompt(`Jogador(a) ${p+1} de ${nplayers}, por favor, digite seu nome: `);
        if (player.playerName == '') {
            player.playerName = 'Gertrude';
        }
        player.playerRoll = 0;
        player.playerPoints = 0;
        players.push({...player});
    }

    for (; m < nmatches; m++) {
        players.sort(function (x, y) {
            return x.playerNum - y.playerNum;
        });
        matchRolls = [];
        matchMax = 0;
        matchHeader = (`Rodada ${m+1} de ${nmatches}`);
        console.log(matchHeader);
        prompt('Pressione ENTER para continuar...');
        console.clear();
        for (player of players) {
            console.log(matchHeader);
            playerHeader = (`${player.playerName} (jogador(a) ${player.playerNum} de ${nplayers})`);
            prompt(`${playerHeader}, pressione ENTER para rolar o dado!`);
            console.clear();
            console.log(matchHeader);
            die = player.playerRoll = Math.floor(Math.random() * 6) + 1;
            matchRolls.push(die);
            playerFooter = (`${player.playerName} (jogador(a) ${player.playerNum} de ${nplayers}) tirou ${player.playerRoll}!`);
            console.log(playerFooter);
            prompt('Pressione ENTER para continuar...');
            console.clear();
        }
        matchMax = matchRolls.reduce(function(a, b) {
            return Math.max(a, b);
        }, 0);
        players.sort(function (x, y) {
            return y.playerRoll - x.playerRoll;
        });
        for (player of players) {
            console.log(`Jogador(a) ${player.playerNum} - ${player.playerName} tirou ${player.playerRoll}`)
            if (player.playerRoll === matchMax) {
                player.playerPoints++;
                console.log(`Ponto para ${player.playerName}!`);
            }
        }
    }

    prompt('Pressione ENTER para continuar...');
    console.clear();

    players.sort(function (x, y) {
        return y.playerPoints - x.playerPoints;
    });

    console.log('PLACAR GERAL');
    console.log();
    for (player of players) {
        console.log(`Jogador(a) ${player.playerNum} - ${player.playerName}: ${player.playerPoints} pontos.`);
    }
    console.log();

    check = prompt('Gostaria de jogar novamente? (s/n) ');

    if (check == 's') {}
    else {
        console.clear();
        console.log('Obrigado por jogar!');
        break;
    };

}