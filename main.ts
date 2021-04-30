basic.showString("Hello!")
basic.forever(function () {
    if (tinkercademy.PIR(DigitalPin.P0)) {
        tinkercademy.LED(DigitalPin.P1, OnOff.On)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showString("FARA")
    } else {
        tinkercademy.LED(DigitalPin.P1, OnOff.Off)
    }
})
