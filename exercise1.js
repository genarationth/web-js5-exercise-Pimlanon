//part1
const waitingPeople = ['Sofia', 'David', 'Juan'];
console.log(waitingPeople); //[ 'Sofia', 'David', 'Juan' ]

//part2
waitingPeople.push('Sara', 'Augustin');
console.log(waitingPeople); //[ 'Sofia', 'David', 'Juan', 'Sara', 'Augustin' ]
waitingPeople.shift();
console.log(waitingPeople); //[ 'David', 'Juan', 'Sara', 'Augustin' ]
