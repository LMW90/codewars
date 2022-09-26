// return next perfect sqare or -1 if input is not a perfect sqare
function findNextSquare(sq) {
    return (Number.isInteger(Math.sqrt(sq)))
            ? (Math.sqrt(sq) + 1) ** 2
            : -1;
    }