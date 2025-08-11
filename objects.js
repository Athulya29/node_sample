const rectangle={
    length:200,
    width:100
}
console.log(rectangle)

const persons={
    name:"Athulya",
    age:21,
    country:"india",
    skills:["HTML","CSS","JavaScript"]
}
console.log(persons)


const person = {
  firstName: 'Athulya',
  lastName: 'A R',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName}${this.lastName}`
  },
  'phone number': '+3584545454545'
}
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location) 
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['age'])
console.log(person['location']) 
console.log(person['phone number'])
console.log(person.getFullName())
