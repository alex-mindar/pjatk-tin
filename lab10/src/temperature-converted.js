module.exports = {
    celsiusToOthers(celsius) {
        return {
            fahrenheit: (celsius * 9 / 5) + 32,
            kelvin: celsius + 273.15
        }
    },
    fahrenheitToOthers(fahrenheit) {
        return {
            celsius: (fahrenheit - 32) * 5 / 9,
            kelvin: (fahrenheit - 32) * 5 / 9 + 273.15
        }
    },
    kelvinToOthers(kelvin) {
        return {
            celsius: kelvin - 273.15,
            fahrenheit: (kelvin - 273.15) * 9 / 5 + 32
        }
    }
}