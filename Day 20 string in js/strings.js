// let str = 'Hello'
// undefined
// typeof str
// 'string'
// let str1 = new String('World!!!')
// undefined
// typeof str1
// 'object'
// str
// 'Hello'
// str1
// String {'World!!!'}
// str1[0]
// 'W'
// str[0]
// 'H'
// str[2]
// 'l'
// str +' '+ str1
// 'Hello World!!!'
// 'tre'[1]
// 'r'

// const str = '       Hello World       '

// console.log(str.toUpperCase())
// console.log(str)

// const lowerStr = str.toLowerCase()
// console.log(str, '->', lowerStr)

// const bothSideTrim = str.trim()
// console.log(str, '->', bothSideTrim)

// const startTrim = str.trimStart()
// console.log(startTrim)

const str = 'JavaScripta'

console.log(str.charAt(4))
console.log(str[4])

const str1 = str.concat(' is fun!')
console.log(str, '->', str1)

console.log(str.includes('a'))
const letter = "A"
console.log(str.includes(letter.toLowerCase()))
console.log(str.includes('Script'))

console.log(str.indexOf('a'))
console.log(str.indexOf('a', 2))
console.log(str.lastIndexOf('a'))

const replacedString = str.replace('a', 'o')
console.log(str, '->', replacedString)

const replaceAllStr = str.replaceAll('a', 'o')
console.log(replaceAllStr)

console.log(str.repeat(3))

console.log('5'.padStart(3,'$'))
console.log(str.padStart(12,'@'))

console.log('5'.padEnd(3,'0'))
console.log(str.padEnd(15, '!'))

const fruitsStr = 'apple,banana,cherry,mango,orange'
const fruitsArr = fruitsStr.split(',')
console.log(fruitsStr,"->", fruitsArr)

console.log(fruitsArr.join(','))

const s = 'we are developers'
console.log(s.length)
console.log(s.slice())
console.log(s.substring())

console.log(s.slice(10))
console.log(s.substring(10))

console.log(s.slice(-9))
console.log(s.substring(-9)) // -9 -> 0

console.log(s.substring(17)) // ""

console.log(s.slice(17)) // ""

console.log(s.slice(11, 13)) //"lo"
console.log(s.substring(11,13)) //"lo"

console.log(s.slice(13,11)) // "" here if(st > en)
console.log(s.substring(13,11)) //"lo" here if(st > en) swap => subString(11,13)

console.log(s.slice(-6, -2))
console.log(s.substring(-6, -2)) // -6 = 0, -2 = 0 //""
console.log(s.slice(-6, 2)) // slice(11, 2) //""
console.log(s.substring(-6, 2)) // -6 = 0 -> subString(0, 2) // "we "

console.log(s.slice(2, -6))
console.log(s.substring(2, -6)) // -6 = 0 -> subString(2, 0) -> subString(0, 2)//"we"

console.log(s.substr(2, 4))
console.log(s.slice(2, 4))