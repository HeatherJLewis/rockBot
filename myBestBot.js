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

    generateResponsivePlay(){
        const randomFactor = Math.random();
        const numberofRPS = this.runningTotalP2.R+this.runningTotalP2.P+this.runningTotalP2.S;
        if(randomFactor <= this.runningTotalP2.R/numberofRPS){
            return 'P';
        } else if(randomFactor > this.runningTotalP2.R/this.numberOfgamesPlayed && randomFactor <= (this.runningTotalP2.R+this.runningTotalP2.P)/numberofRPS){
            return 'S';
        } else {
            return 'R';
        }

    };

    makeMove(gamestate){
        this.updateRunningTotals(gamestate);
        if(this.numberOfgamesPlayed < 50){
            console.log(this.runningTotalP2);
            return this.generateRandomPlay();
        }

        if(this.runningTotalP2.R/this.numberOfgamesPlayed > 0.9){
            return 'P'
        }

        if(this.runningTotalP2.P/this.numberOfgamesPlayed > 0.9){
            return 'S'
        }

        if(this.runningTotalP2.S/this.numberOfgamesPlayed > 0.9){
            return 'R'
        }

        if(this.numberOfgamesPlayed > 1 && this.runningTotalP2.D < 100 && this.lastMove.p1 === this.lastMove.p2){
            return 'W';
        }

        if(this.numberOfgamesPlayed > 1 && this.runningTotalP1.D < 100 && this.lastMove.p1 === this.lastMove.p2){
            return 'D';
        }


        return this.generateResponsivePlay();
    }
}

module.exports = new Bot();