function receivesAFunction(func) {
    func()
}

function returnsANamedFunction(func) {
    function namedFunction(x) {
        return x*2
    }
    return namedFunction
}

function returnsAnAnonymousFunction() {
    return x => x*2
}