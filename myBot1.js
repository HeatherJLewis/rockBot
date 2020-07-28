const { generateSkewedRandomPlays } = require('./generateSkewedRandomPlays')

class Bot {
    makeMove(gamestate) {
        let dynamiteCountP1 = 0;
        let dynamiteCountP2 = 0;

        gamestate.rounds.forEach(round => {
            return round.p1 ==='D' ? dynamiteCountP1 += 1 : dynamiteCountP1;
        });

        gamestate.rounds.forEach(round => {
            return round.p2 ==='D' ? dynamiteCountP2 += 1 : dynamiteCountP2;
        });

        let runningTotalsP1 = {
            R: 0,
            P: 0,
            S: 0,
            D: 0,
            W: 0
        };

        let runningTotalsP2 = {
            R: 0,
            P: 0,
            S: 0,
            D: 0,
            W: 0
        };

        gamestate.rounds.forEach(round => {
            runningTotalsP1[round.p1] += 1
        });

        gamestate.rounds.forEach(round => {
            runningTotalsP2[round.p2] += 1
        });

        const lastMove = gamestate.rounds[(gamestate.rounds.length)-1];

        if(gamestate.rounds.length > 0 && dynamiteCountP2 < 100){
            if(lastMove.p1 === lastMove.p2){
                return 'W';
            }
        }

        if(gamestate.rounds.length > 0 && dynamiteCountP1 < 100){
            if(lastMove.p1 === lastMove.p2){
                return 'D';
            }
        }

        if(gamestate.rounds.length === 50){
            const result = Object.keys(runningTotalsP2).reduce((a, b) => runningTotalsP2[a] > runningTotalsP2[b] ? a : b);
            console.log(result) // find which one is higher and then
        }
        return generateSkewedRandomPlays(dynamiteCountP1);
    }
}

module.exports = new Bot();