function turnLightOff (Colour: string) {
    if (Colour == "Red") {
        pins.digitalWritePin(DigitalPin.P8, 0)
    } else if (Colour == "Orange") {
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else if (Colour == "Green") {
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
}
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
    for (let index = 0; index < 50; index++) {
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(50)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(50)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
        basic.pause(50)
    }
})
function turnLightOn (Colour: string) {
    if (Colour == "Red") {
        pins.digitalWritePin(DigitalPin.P8, 1)
    } else if (Colour == "Orange") {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (Colour == "Green") {
        pins.digitalWritePin(DigitalPin.P16, 1)
    }
}
input.onButtonPressed(Button.B, function () {
    turnLightOff("Green")
    turnLightOn("Red")
    basic.pause(5000)
    turnLightOff("Red")
    turnLightOn("Green")
})
turnLightOff("Green")
turnLightOff("Orange")
turnLightOff("Red")
music.playMelody("C5 B A C F F - C ", 120)
turnLightOff("Orange")
turnLightOn("Green")
basic.forever(function () {
	
})
