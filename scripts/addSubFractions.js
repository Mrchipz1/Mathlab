// Random math problems will  be generated in this file
// and pushed onto the site's html

// track problem to solution
var solutionDict = {};

function getOp() {
    let opNum = getRandomInt(100)
    let op = 'plus'
    if (opNum%2 === 0) {
        op = 'minus'
    }
    return op
}

function pattern1() {
    // get ints
    let max = 50
    let num1 = getRandomInt(max)
    let num2 = getRandomInt(max)
    let den1 = getRandomInt(max) + 1
    let den2 = getRandomInt(max) + 1

    // determine random operand
    let op = getOp()

    // create equation
    equation = `${num1} divided by ${den1} ${op} ${num2} divided by ${den2}`
    return equation
}

function pattern2() {
    let op = getOp()
    let eq1 = pattern1()
    let eq2 = pattern1()
    let equation = eq1 + ` ${op} ` + eq2
    return equation
}

function pattern3() {
    let op = getOp()
    let eq1 = pattern2()
    let eq2 = pattern1()
    let equation = eq1 + ` ${op} ` + eq2
}