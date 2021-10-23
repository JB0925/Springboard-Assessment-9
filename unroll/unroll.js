function unroll(squareArray, newArray = []) {
    for (let item of squareArray) {
        if (item instanceof Array) {
            unroll(item, newArray);
        } else {
            newArray.push(item)
        };
    };
    return newArray;
}

const smallerSquare = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"]
  ];
console.log(unroll(smallerSquare));
module.exports = unroll;
