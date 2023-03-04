KSB045.onBtnChanged(KSB045.btnName.C, KSB045.pushType.down, function () {
	
})
KSB045.onBtnChanged(KSB045.btnName.E, KSB045.pushType.down, function () {
	
})
radio.setGroup(173)
basic.forever(function () {
    // 8 上升
    // 2 下降
    // 4 向左轉
    // 6 向右轉
    if (KSB045.getJoystickValue(KSB045.valueType.X) < 500 && KSB045.getJoystickValue(KSB045.valueType.Y) >= 400 && KSB045.getJoystickValue(KSB045.valueType.Y) < 600) {
        radio.sendNumber(4)
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . . . # .
            . . . . #
            `)
        basic.pause(50)
        basic.clearScreen()
    } else if (KSB045.getJoystickValue(KSB045.valueType.Y) < 500 && KSB045.getJoystickValue(KSB045.valueType.X) >= 400 && KSB045.getJoystickValue(KSB045.valueType.Y) < 600) {
        radio.sendNumber(8)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(50)
        basic.clearScreen()
    } else if (KSB045.getJoystickValue(KSB045.valueType.X) > 540 && KSB045.getJoystickValue(KSB045.valueType.Y) >= 400 && KSB045.getJoystickValue(KSB045.valueType.Y) < 600) {
        radio.sendNumber(6)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . # . . .
            # . . . .
            `)
        basic.pause(50)
        basic.clearScreen()
    } else if (KSB045.getJoystickValue(KSB045.valueType.Y) > 520 && KSB045.getJoystickValue(KSB045.valueType.X) >= 400 && KSB045.getJoystickValue(KSB045.valueType.X) < 600) {
        radio.sendNumber(2)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(50)
        basic.clearScreen()
    } else if (KSB045.getBtnValue(KSB045.btnName.F)) {
        radio.sendNumber(7)
        basic.showLeds(`
            . . # . .
            . # . . .
            # . . . .
            . # . . .
            . . # . .
            `)
        basic.pause(50)
        basic.clearScreen()
    } else if (KSB045.getBtnValue(KSB045.btnName.D)) {
        radio.sendNumber(9)
        basic.showLeds(`
            . . # . .
            . . . # .
            . . . . #
            . . . # .
            . . # . .
            `)
        basic.pause(50)
        basic.clearScreen()
    } else if (KSB045.getBtnValue(KSB045.btnName.E)) {
        radio.sendNumber(3)
        basic.showLeds(`
            . . # . .
            . . . . .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.pause(50)
        basic.clearScreen()
    } else if (KSB045.getBtnValue(KSB045.btnName.C)) {
        radio.sendNumber(1)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . # . .
            `)
        basic.pause(50)
        basic.clearScreen()
    } else {
        radio.sendNumber(0)
    }
})
