basic.showString("Hello!")
OLED.init(128, 64)
basic.forever(function () {
    if (tinkercademy.PIR(DigitalPin.P0)) {
        tinkercademy.LED(DigitalPin.P1, OnOff.On)
        music.playTone(262, music.beat(BeatFraction.Whole))
        OLED.writeStringNewLine("FARA")
    } else {
        tinkercademy.LED(DigitalPin.P1, OnOff.Off)
    }
})
