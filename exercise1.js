//part1
const waitingPeople = ['Sofia', 'David', 'Juan'];
console.log(waitingPeople); //[ 'Sofia', 'David', 'Juan' ]

//part2
waitingPeople.push('Sara', 'Augustin');
console.log(waitingPeople); //[ 'Sofia', 'David', 'Juan', 'Sara', 'Augustin' ]
waitingPeople.shift();
console.log(waitingPeople); //[ 'David', 'Juan', 'Sara', 'Augustin' ]

//part3
waitingPeople.splice(1,0,'Renata');
console.log(waitingPeople); //[ 'David', 'Renata', 'Juan', 'Sara', 'Augustin' ]
waitingPeople.push('Elena');
console.log(waitingPeople);//[ 'David', 'Renata', 'Juan', 'Sara', 'Augustin', 'Elena' ]
