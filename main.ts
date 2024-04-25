input.onGesture(Gesture.TiltRight, function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 2)
        basic.pause(100)
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    for (let index2 = 0; index2 < 4; index2++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(200)
        basic.clearScreen()
        basic.pause(200)
    }
})
let index = 0
