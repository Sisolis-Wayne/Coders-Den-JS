            // 1
let challenge = '30 Days Of JavaScript';

            // 2
console.log(challenge)

            // 3
console.log(challenge.length)

            // 4
let upp = challenge.toUpperCase();
console.log(upp)

            // 5
let low = challenge.toLowerCase();
console.log(low)

            // 6
let slyce = challenge.substring(0, 3)
console.log(slyce)

            // 7
let slyce1 = challenge.substring(3)
console.log(slyce1)

            // 8
let checkScript = challenge.includes('Script')
console.log(checkScript)

            // 9
let spleet = challenge.split()
console.log(spleet)

            // 10
let spleet1 = challenge.split(' ')
console.log(spleet1)

            // 11
let techGiants = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(techGiants.split(', '))

            // 12
let rePlace = challenge.replace('JavaScript', 'Python');
console.log(rePlace)

            // 13
let karakta = challenge.charAt(15);
console.log(karakta)

            // 14
let karaktaCode = challenge.charCodeAt(11);
console.log(karaktaCode)

            // 15
let indessxOf = challenge.indexOf('a');
console.log(indessxOf)

            // 16
let indessxOf1 = challenge.lastIndexOf('a');
console.log(indessxOf1)

            // 17
let beCause = 'You cannot end a sentence with because because because is a conjunction'
let indessxOf2 = beCause.indexOf('because')
console.log(indessxOf2)

             // 18
let indessxOf3 = beCause.lastIndexOf('because')
console.log(indessxOf3)

            // 19
let serch = beCause.search('because')
console.log(serch)

            // 20
let toBeTreemed = ' 30 Days Of JavaScript '
let treemed = toBeTreemed.trim();
console.log(treemed)

            // 21
let startWeeth = challenge.startsWith('30')
console.log(startWeeth)

            // 22
let endsWeeth = challenge.endsWith('JavaScript')
console.log(endsWeeth)

            // 23
let marrtch = challenge.match(/a/gi);
console.log(marrtch)

            // 24
let part1 = '30 Days of';
let corncart = part1.concat(' ', 'JavaScript');
console.log(corncart)

            // 25
let repit = challenge.repeat(2);
console.log(repit)

            // level2
            // 1
let printTheStatement = "The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another."
console.log(printTheStatement)

            // 2
let printTheStatement2 = '\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"'
console.log(printTheStatement2)

            // 3
let num = '10';
console.log((typeof (num)) == (typeof 10));
let numInt = parseInt(num)
console.log(numInt)
console.log((typeof (numInt)) == (typeof 10));

            // 4
let paFloat = parseFloat('9.8');
console.log(paFloat)
console.log(paFloat == 10)
let roundUp = Math.ceil(paFloat)
console.log(roundUp)
console.log(roundUp == 10)

            // 5
let snake = 'python';
let nonsense = 'jargon';
console.log(snake.includes('on'))
console.log(nonsense.includes('on'))

            // 6
let nonsenseAgain = 'I hope this course is not full of jargon.'
console.log(nonsenseAgain.includes('jargon'))

            // 7
let ranDom = Math.floor(Math.random() * 101);
console.log(ranDom)

            // 8
let numsss = Math.floor(Math.random() * 51) + 50
console.log(numsss)

            // 9
let ranDom3 = Math.floor(Math.random() * 256);
console.log(ranDom3)

            // 10
let lang = 'JavaScript';
console.log(lang.length)
let i = Math.floor(Math.random() * (lang.length))
console.log(lang[i])

            // 11
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

            // 12
let sliceBecause = beCause.substr(31, 23);
console.log(sliceBecause)

            // level3
            // 1
let theBest = 'Love is the best thing in this world.Some found their love and some are still looking for their love.'
console.log(theBest.match(/love/gi))

            // 2
console.log(beCause.match(/because/gi))

            // 3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'