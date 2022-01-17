class Student {
    constructor(firstName, lastName, id, grades) {
        this.firstName = firstName
        this.lastName = lastName
        this.id = id
        this.grades = grades
    }

    get avgGrade() {
        return this.grades.reduce((acc, rec) => acc + rec, 0) / this.grades.length
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(fullName) {
        [this.firstName, this.lastName] = fullName.split(' ')
    }

    displayStudent = () => {
        console.log(`${this.fullName}: ${this.avgGrade}`)
    }
}

const student = new Student('Oleksii', 'Myndar', 1, [5, 10, 15, 3])
student.displayStudent()
console.log(student.avgGrade)
console.log(student.fullName)
student.fullName = 'Tomasz Pieciukiewicz'
console.log(student.fullName)
