// new Object -> Object.prototype

const objtA = {
  chaveA: 'A'
  // __proto__: Object.prototype
}


const objtB = {
  chaveB: 'B'
  // __proto__: ObjA
}

const objtC = new Object()
objtC.chaveC = 'C'

Object.setPrototypeOf(objtB, objtA)
Object.setPrototypeOf(objtC, objtB)
// Object.getPrototypeOf()
console.log(objtC.chaveA)