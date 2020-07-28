const generateSkewedRandomPlays = (dynamiteCount) => {
    const randomFactor = Math.random()*10;

    if(randomFactor <= 3){
        return 'R';
    } else if(randomFactor > 3 && randomFactor <= 6){
        return 'P';
    } else {
        return 'S';
    };
};

module.exports = {
    generateSkewedRandomPlays
}
