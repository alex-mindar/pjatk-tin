const {kelvinToOthers, celsiusToOthers, fahrenheitToOthers} = require('./temperature-converted')
const {kmsToMiles, milesToKms} = require('./km-mile-converter')

document.getElementById('submit-celsius').addEventListener('click', () => {
    const temps = celsiusToOthers(document.getElementById('celsius').value)
    document.getElementById('celsius-to-fahrenheit').innerText = `${temps.fahrenheit}`
    document.getElementById('celsius-to-kelvin').innerText = `${temps.kelvin}`
})

document.getElementById('submit-fahrenheit').addEventListener('click', () => {
    const temps = fahrenheitToOthers(document.getElementById('fahrenheit').value)
    document.getElementById('fahrenheit-to-celsius').innerText = `${temps.celsius}`
    document.getElementById('fahrenheit-to-kelvin').innerText = `${temps.kelvin}`
})

document.getElementById('submit-kelvin').addEventListener('click', () => {
    const temps = kelvinToOthers(document.getElementById('kelvin').value)
    document.getElementById('kelvin-to-celsius').innerText = `${temps.celsius}`,
    document.getElementById('kelvin-to-fahrenheit').innerText = `${temps.fahrenheit}`
})

document.getElementById('submit-kms').addEventListener('click', () => {
    const miles = kmsToMiles(document.getElementById('kms').value)
    document.getElementById('kms-to-miles').innerText = miles
})

document.getElementById('submit-miles').addEventListener('click', () => {
    const kms = milesToKms(document.getElementById('miles').value)
    document.getElementById('miles-to-kms').innerText = kms
})