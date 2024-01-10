const student = {
     name : "Mayuk Mukjerjee",
     email : "Mayuk@gmail.com",
     address : "Barendranagar",
     science : {
        physics : 99,
        chemistry : 88,
        mathematics : 97,
     },
     calc_science : function(){
         let total;
         total = this.science.physics + this.science.chemistry + this.science.mathematics;
         return total;
     },
     personal_info : function(){
        return `name is ${this.name} , email is ${this.email} , address is ${this.address}`;
     }
}

let result = student.calc_science();
console.log(`The total marks in science is = ${result}`);

let information = student.personal_info();
console.log(information);
