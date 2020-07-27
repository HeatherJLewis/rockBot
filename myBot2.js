class Bot {
    makeMove(gamestate) {
        let dynamiteCount = 0;

        gamestate.rounds.forEach(round => {
            return round.p1 ==='D' ? dynamiteCount += 1 : dynamiteCount;
        });

        let runningTotalsP1 = {
            R: 0,
            P: 0,
            S: 0,
            D: 0,
            W: 0,
            isLastRoundTie : false,

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

        if(gamestate.rounds.length > 0 && dynamiteCount < 100){
            if(lastMove.p1 === lastMove.p2){
                return 'D';
            }
        }

        const randomFactor = Math.random()*10;

        if(randomFactor <= 3){
            return 'R';
        } else if(randomFactor > 3 && randomFactor <= 6){
            return 'P';
        } else if(randomFactor > 6 && randomFactor <= 9){
            return 'S';
        } else if(randomFactor > 9 && randomFactor <= 9.7 && dynamiteCount < 100){
            return 'D';
        } else {
            return 'W';
        };


    }
}

module.exports = new Bot();