const student = {
    name: 'kodom ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        return this.name + 'is participating in exam';
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },
    treatDey: function(amount,boksis){
        this.money = this.money - amount -boksis;
        return this.money;
    }
}
const exam = student.exam();
console.log(student);
const reExam = student.improveExam('Algebra');
console.log(reExam);
const money = student.treatDey(900,100);
console.log(money);
