// BASIC BOT
// class Bot {
//     makeMove(gamestate) {
//         let dynamiteCount = 0;
//         gamestate.rounds.forEach(round => {
//             round.p1 === 'D' ? dynamiteCount +=1 : dynamiteCount
//         })
//         const randomFactor = Math.random()*10;

//         if(randomFactor <= 2){
//             return 'R';
//         } else if(randomFactor > 2 && randomFactor <= 4){
//             return 'P';
//         } else if(randomFactor > 4 && randomFactor <= 6){
//             return 'S';
//         } else if(randomFactor > 6 && randomFactor <= 8 && dynamiteCount < 100){
//             return 'D';
//         } else {
//             return 'W';
//         }
//     }
// }


// BASIC RANDOM BOT WITH SKEWED DISTRIBUTION

class Bot {
    makeMove(gamestate) {
        let runningTotals = {
            R: 0,
            P: 0,
            S: 0,
            D: 0,
            W: 0
        }

        gamestate.rounds.forEach(round => {
            runningTotals[round.p1] += 1
        })
        const randomFactor = Math.random()*10;

        if(randomFactor <= 3){
            return 'R';
        } else if(randomFactor > 3 && randomFactor <= 6){
            return 'P';
        } else if(randomFactor > 6 && randomFactor <= 9){
            return 'S';
        } else if(randomFactor > 9 && randomFactor <= 9.7 && runningTotals.D < 100){
            return 'D';
        } else {
            return 'W';
        }
    }
}

module.exports = new Bot();