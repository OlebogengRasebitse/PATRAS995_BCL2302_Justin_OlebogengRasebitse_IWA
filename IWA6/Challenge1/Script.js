//REGULAR EXPRESSION METHOD.

const primaryPhone = 'O748105141';
const secondaryPhone = '0219131568';



//Only change below this line

const primaryValid = typeof primaryPhone === 'string' && /^[0-9]+$/.test(primaryPhone)
console.log('Primary phone is valid numerical string:', primaryValid)


const secondaryValid = typeof secondaryPhone === 
'string' && /^[0-9]+$/.test(secondaryPhone)
console.log('Secondary phone is valid numerical string:', secondaryValid)


//INDEX OF METHOD

// const primaryPhone = 'O748105141';
// const primaryValid = primaryPhone.includes(Number)
// console.log(primaryValid)


// const secondaryPhone = '0219131568';
// const secondaryValid = secondaryPhone.includes(Number)
// console.log(secondaryValid)