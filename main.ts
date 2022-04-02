joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
	
})
radio.setGroup(1)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) <= 200) {
        radio.sendString("R")
        basic.showString("R")
    }
    if (pins.analogReadPin(AnalogPin.P2) <= 200) {
        radio.sendString("B")
        basic.showString("B")
    }
    if (pins.analogReadPin(AnalogPin.P1) >= 800) {
        radio.sendString("L")
        basic.showString("L")
    }
    if (pins.analogReadPin(AnalogPin.P2) >= 800) {
        radio.sendString("F")
        basic.showString("F")
    }
})
