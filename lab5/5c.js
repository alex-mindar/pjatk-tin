const Courses = {
    coursesToTake: ['APBD', 'TIN', 'GRK', 'AM']
}

const createStudent = (firstName, lastName, id) => {
    const student = Object.create(Courses)
    student.firstName = firstName
    student.lastName = lastName
    student.id = id
    return student
}

const student = createStudent('Oleksii', 'Myndar', 1)
console.log(student)
console.log(student.coursesToTake)