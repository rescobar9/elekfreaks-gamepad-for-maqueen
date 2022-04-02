input.onButtonPressed(Button.A, function () {
    radio.sendString("LEDR")
    basic.showString("LEDR")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("S")
    basic.showString("S")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("LEDL")
    basic.showString("LEDL")
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
