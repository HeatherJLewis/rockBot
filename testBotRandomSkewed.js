class Bot {
    constructor(){
        this.runningTotalP1 = {
            R: 0,
            P: 0,
            S: 0,
            D: 0,
            W: 0
        };
        this.runningTotalP2 = {
            R: 0,
            P: 0,
            S: 0,
            D: 0,
            W: 0
        }
        this.numberOfgamesPlayed = 0;
        this.lastMove = {};
    }

    updateRunningTotals(gamestate){
        this.lastMove = gamestate.rounds[(gamestate.rounds.length)-1];
        if(this.lastMove != undefined){
            this.runningTotalP1[this.lastMove.p1]++;
        }

        if(this.lastMove != undefined){
            this.runningTotalP2[this.lastMove.p2]++;
        }
        this.numberOfgamesPlayed++;
    }

    generateRandomPlay(){
        const randomFactor = Math.random()*10;

        if(randomFactor <= 3){
            return 'R';
        } else if(randomFactor > 3 && randomFactor <= 6){
            return 'P';
        } else if(randomFactor > 6 && randomFactor <= 9){
            return 'S';
        } else if(randomFactor > 9 && randomFactor <= 9.7 && this.runningTotalP1.D < 100){
            return 'D';
        } else {
            return 'W';
        };
    };

    makeMove(gamestate){
        this.updateRunningTotals(gamestate);

        return this.generateRandomPlay();

    }
}

module.exports = new Bot();