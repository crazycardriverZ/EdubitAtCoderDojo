input.onButtonPressed(Button.A, function () {
    State = 0
    Hand = randint(0, 2)
    if (Hand == 0) {
        basic.pause(1630)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (Hand == 1) {
        basic.pause(1630)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.pause(1630)
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (State != 0) {
        State = 0
        Lives_ += 3
    }
})
input.onButtonPressed(Button.B, function () {
    Lives_ += -1
    basic.showNumber(Lives_)
})
let Hand = 0
let State = 0
let Lives_ = 0
Lives_ = 3
basic.forever(function () {
    if (Lives_ <= 0) {
        State = 1
        while (State != 0) {
            if (State == 1) {
                basic.showIcon(IconNames.Sad)
            }
            if (true) {
                basic.pause(1000)
            }
            if (true) {
                basic.showString("GG! ")
            }
            if (true) {
                basic.pause(1000)
            }
            if (true) {
                basic.showString("Press A+B to restart!")
            }
        }
    }
})
