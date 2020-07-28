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
        console.log(this.lastMove);

        if(randomFactor <= 3.3){
            return 'R';
        } else if(randomFactor > 3.3 && randomFactor <= 6.6){
            return 'P';
        } else {
            return 'S';
        };
    };

    generateResponsivePlay(){

        const randomFactor = Math.random();

        if(randomFactor <= this.runningTotalP2.S/this.numberOfgamesPlayed){
            return 'R';
        } else if(randomFactor > this.runningTotalP2.R/this.numberOfgamesPlayed && randomFactor <= this.runningTotalP2.P/this.numberOfgamesPlayed){
            return 'P';
        } else {
            return 'S';
        };
    };

    makeMove(gamestate){
        this.updateRunningTotals(gamestate);
        if(this.runningTotalP2.D>100){
        }

        if(this.numberOfgamesPlayed > 1 && this.runningTotalP2.D < 100 && this.lastMove.p1 === this.lastMove.p2){
            return 'W';
        }

        if(this.numberOfgamesPlayed > 1 && this.runningTotalP1.D < 100 && this.lastMove.p1 === this.lastMove.p2){
            return 'D';
        }

        if(this.numberOfgamesPlayed < 50){
            return this.generateRandomPlay();
        }

        return this.generateResponsivePlay();
    }
}

module.exports = new Bot();