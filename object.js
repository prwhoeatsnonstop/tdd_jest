const anObject = {
    name: "Eunice",
    age: 21
}

const anotherObject = {
    name: "Denise",
    age: 21
}

const finalObject = {
    eunice: anObject,
    denise: anotherObject
}

const blah = {
    anObject,
    anotherObject
}

console.log(`Final Object: \n${JSON.stringify(finalObject)}`);
console.log(`Blah: \n${JSON.stringify(blah)}`);