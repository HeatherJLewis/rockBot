class Bot {
    makeMove(gamestate) {
        let dynamiteCount = 0;

        gamestate.rounds.forEach(round => {
            round.p1 === 'D' ? dynamiteCount +=1 : dynamiteCount
        })
        const randomFactor = Math.random()*10;

        if(randomFactor <= 2){
            return 'R';
        } else if(randomFactor > 2 && randomFactor <= 4){
            return 'P';
        } else if(randomFactor > 4 && randomFactor <= 6){
            return 'S';
        } else if(randomFactor > 6 && randomFactor <= 8 && dynamiteCount < 100){
            return 'D';
        } else {
            return 'W';
        }
    }
}

module.exports = new Bot();