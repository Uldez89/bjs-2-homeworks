function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  
}
let student1 = new Student('Petr', 'men', 33);
let student2 = new Student('Ann', 'women', 31);
let student3 = new Student('Viktor', 'men', 38);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
    if (typeof this.marks === false || this.marks === undefined) {
        return 0;
    }
        this.marks = [...this.marks, ...marksToAdd];
}

Student.prototype.getAverage = function () {
    if (typeof this.marks === false || this.marks === undefined) {
        return 0;
    }
    let result = this.marks.reduce((acc, item, index, arr) => {
        acc += item;
        if (index === arr.length - 1) {
            return acc / arr.length
        } return acc;
    }, 0);
    return result;
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
