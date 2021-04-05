let directionData = 0
let tempSensorData = 0
let lightSensorData = 0
let waterSensor = 0
input.onButtonPressed(Button.A, function () {
    directionData = input.compassHeading()
    tempSensorData = input.temperature()
    lightSensorData = input.lightLevel()
    waterSensor = pins.analogReadPin(AnalogPin.P1)
    serial.writeValue("direction", directionData)
    serial.writeValue("temperature", tempSensorData)
    serial.writeValue("light", lightSensorData)
    serial.writeValue("water", waterSensor)
})
