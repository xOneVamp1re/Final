let a = 10

function f1() {
  console.log('(global) a = ' + a)
}

f1()

a = 99

f1()

function f2() {
  let a = 33
  console.log(`(global) a = ${a}`)
}

f2()

// иногда переменные нужны снаружи
function createStep(n = 0) {
  let count = n
  return function () {
    count++
    console.log(count)
  }
}

let step1 = createStep()
let step2 = createStep(200)

step1()
step1()
step1()
step1()
step1()
step2()
step2()
step2()

let randomInteger = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  return Math.round(rand)
}

function createBeggar() {
  let s = 0
  return function beggar() {
    s += randomInteger(0, 100)
    console.log(s)
    if (s >= 250) {
      return
    }
    beggar()
  }
}

let begg1 = createBeggar()
let begg2 = createBeggar()
begg1()
console.log('==========')
begg2()
;(function () {
  let p = 10
  p = p + 1
  console.log('work f1: ' + p)
})()
;(function () {
  let p = 2
  p = p + 1
  console.log('work f2: ' + p)
})()

let counter = (startSum = 0) => {
  let sum = startSum
  return function (num) {
    return sum + num
  }
}

let count = counter(5)
let count2 = counter(200)
console.log(count(10))
console.log(count2(10))
