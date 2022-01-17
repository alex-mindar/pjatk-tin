function Student(firstName, lastName, id, grades) {
    this.firstName = firstName
    this.lastName = lastName
    this.id = id
    this.grades = grades

    this.displayStudent = () => {
        const avgGrade = grades.reduce((acc, rec) => acc + rec, 0) / grades.length
        console.log(`${this.firstName} ${this.lastName}: ${avgGrade}`)
    }
}

const student = new Student('Oleksii', 'Myndar', 1, [5, 10, 15, 3])
student.displayStudent()