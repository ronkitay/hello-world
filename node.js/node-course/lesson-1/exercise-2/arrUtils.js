let strUtils = require("./strUtils");

function getArrLength(arrayOfStrings) {
    return arrayOfStrings.map(strUtils.getLength).reduce(sum);
}

function sum(x, y) {
    return x + y;
}

module.exports = {getArrLength};