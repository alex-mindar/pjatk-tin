function Student(firstName, lastName, id, grades) {
    this.firstName = firstName
    this.lastName = lastName
    this.id = id
    this.grades = grades

    this.displayStudent = () => {
        const avgGrade = this.grades.reduce((acc, rec) => acc + rec, 0) / this.grades.length
        console.log(`${this.firstName} ${this.lastName}: ${avgGrade}`)
    }
}

const student = new Student('Oleksii', 'Myndar', 1, [5, 10, 15, 3])

Object.defineProperty(student, 'avgGrade', {
    get: function() {
        return this.grades.reduce((acc, rec) => acc + rec, 0) / this.grades.length
    }
})
// getter and setter for student’s full name
Object.defineProperty(student, 'fullName', {
    get: function() {
        return `${this.firstName} ${this.lastName}`
    },
    set: function(fullName) {
        [this.firstName, this.lastName] = fullName.split(' ')
    }
})

student.displayStudent()
console.log(student.avgGrade)
console.log(student.fullName)
student.fullName = 'Tomasz Pieciukiewicz'
console.log(student.fullName)