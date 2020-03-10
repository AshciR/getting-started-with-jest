const filterByTerm = (inputArr, searchTerm) => {
    if(!inputArr.length) throw Error("inputArr can not be empty");
    if(!searchTerm) throw Error("searchTerm can not be empty");

    const regex = RegExp(searchTerm, "i");
    return inputArr.filter(it => it.url.match(regex));
}

module.exports = filterByTerm;