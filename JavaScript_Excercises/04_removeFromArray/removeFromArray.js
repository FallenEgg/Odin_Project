const removeFromArray = function(...args) {
    let args = Array.from(array);

    args.splice(args.indexOf(target));

    return args;
};

module.exports = removeFromArray;