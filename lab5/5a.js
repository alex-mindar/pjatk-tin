const calc = {
    x: 5,
    y: 10,
    z: 15,
    add: function() {
        return this.x + this.y + this.z
    },
    subtract: function() {
        return this.x - this.y - this.z
    },
    multiply: function() {
        return this.x * this.y * this.z
    }
}

const showObj = (obj) => {
    for (const prop in obj) {
        console.log(`${prop}: ${typeof prop}`)
    }
}

console.log(calc)
showObj(calc)