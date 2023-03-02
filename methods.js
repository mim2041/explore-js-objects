const student = {
    name: 'kodom ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        console.log(this.name);
    }
}
console.log(student);
student.exam();