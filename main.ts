function Position_1 () {
    OLED.clear()
    basic.pause(1000)
    OLED.writeString("North: ")
    OLED.writeNumNewLine(Math.round(tinkercademy.MoistureSensor(AnalogPin.P0)))
    OLED.newLine()
    basic.pause(1000)
}
function Position_3 () {
    OLED.clear()
    basic.pause(1000)
    OLED.writeString("East: ")
    OLED.writeNumNewLine(Math.round(tinkercademy.MoistureSensor(AnalogPin.P2)))
    OLED.newLine()
    basic.pause(1000)
}
function Position_2 () {
    OLED.clear()
    basic.pause(1000)
    OLED.writeString("South: ")
    OLED.writeNumNewLine(Math.round(tinkercademy.MoistureSensor(AnalogPin.P1)))
    OLED.newLine()
    basic.pause(1000)
}
OLED.init(128, 64)
basic.forever(function () {
    if (tinkercademy.MoistureSensor(AnalogPin.P0) > 70) {
        pins.servoWritePin(AnalogPin.P10, 0)
        Position_1()
    } else if (tinkercademy.MoistureSensor(AnalogPin.P1) > 70) {
        pins.servoWritePin(AnalogPin.P10, 90)
        Position_2()
    } else if (tinkercademy.MoistureSensor(AnalogPin.P2) > 70) {
        pins.servoWritePin(AnalogPin.P10, 180)
        Position_3()
    } else {
        OLED.writeStringNewLine("Inicialize")
    }
})
