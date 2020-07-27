const generateSkewedRandomPlays = (dynamiteCount) => {
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
};

module.exports = {
    generateSkewedRandomPlays
}
