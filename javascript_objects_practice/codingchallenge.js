// CODING CHALLENGE

const Mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.6,
    calcBMI: function(){
        this.bmi = this.mass/(this.height * this.height);
        return this.bmi;
    }
}

const John = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass/(this.height * this.height);
        return this.bmi;
    }
}

// console.log(`${John.calcBMI()}`);
// console.log(`${John.bmi}`);
// console.log(`${John.fullName}'s BMI (${John.calcBMI()}`) 
console.log(`${John.fullName}'s BMI (${John.calcBMI()}) is ${John.calcBMI() > Mark.calcBMI() ? 'higher' : 'lower'} than ${Mark.fullName}'s BMI (${Mark.calcBMI()})!`);