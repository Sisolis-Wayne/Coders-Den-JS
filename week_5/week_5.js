            // level 1
            // 1
const emptyArr = Array()
console.log(emptyArr)

            // 2
const notEmptyArr = ['me', 'mine', 'you', 'they', 'us'];

            // 3
console.log(notEmptyArr.length);

            // 4
console.log(notEmptyArr[0]);
console.log(notEmptyArr[2]);
console.log(notEmptyArr[4]);

            // 5
const mixedDateTypes = [2022,
    'Akorede',
    4.5,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] },
    'Nigeria',
    true
]

            // 6
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazons']

            // 7
console.log(itCompanies)

            // 8
console.log(itCompanies.length);

            // 9
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);

            // 10
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

            // 11
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

            // 12
console.log(itCompanies.join(', '), 'are big IT companies')

            // 13
let searchCompany = 'Facebook';
console.log(itCompanies.includes(searchCompany))
if (itCompanies.includes(searchCompany)) {
    console.log(`${searchCompany}`);
} else {
    console.log('The company does not exist.')
}

            // 14
console.log(itCompanies.splice(0, 2))
console.log(itCompanies)

            // 15
console.log(itCompanies.sort());

            // 16
console.log(itCompanies.reverse())

            // 17
console.log(itCompanies)
console.log(itCompanies.slice(0,3))

            // 18
console.log(itCompanies.slice(-3))

            // 19
console.log(itCompanies.slice(2, 3))

            // 20
console.log(itCompanies.splice(0,1))
console.log(itCompanies)

            // 21
console.log(itCompanies.splice(1, 2))
console.log(itCompanies)

            // 22
console.log(itCompanies.splice(1))
console.log(itCompanies)

            // 23
console.log(itCompanies.splice(0))
console.log(itCompanies)

            // level 2
            // 1
// import { countries } from "./separate_countries.js"
// import { webTechs } from "./web_tech.js"

// console.log(countries)
// console.log(webTechs)

            // 2
let txt = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(txt.indexOf('.'))
// console.log(txt.splice(36, 1))
// console.log(txt.splice())
let ss = txt.replace(/,/g, "").replace('.', "").replace('.', "").split(' ')
console.log(ss)
console.log(ss.length)
// console.log(txt.replace(',', ''))
let sss = txt.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ");
console.log(sss)
console.log(sss.split(' '))
console.log(sss.split(' ').length)

            // 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
shoppingCart.splice(4, 1)
shoppingCart[3] = 'Green tea'
console.log(shoppingCart)

            // 4
// console.log(countries)
// console.log(countries.includes('Ethiopia'))
// if (countries.includes('Ethiopia')) {
//     console.log('ETHIOPIA')
// } else {
//     countries.push('Ethiopia')
//     console.log(countries)
// }

            // 5
// console.log(webTechs)
// console.log(webTechs.includes('Sass'))
// if (webTechs.includes('Sass')) {
//     console.log('Sass is a CSS preprocess')
// } else {
//     webTechs.push('Sass')
//     console.log(webTechs)
// }

            // 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

            // level 3
            // 1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let agesSort = ages.sort()
console.log(agesSort)

// median
console.log(agesSort.length)
console.log((agesSort[4] + agesSort[5]) / 2)

// average
let sum = agesSort[0] + agesSort[1] + agesSort[2] + agesSort[3] + agesSort[4] + agesSort[5] + agesSort[6] + agesSort[7] + agesSort[8] + agesSort[9]
let average = sum / 10
console.log(average)

// range
let range = 26 - 19
console.log(range)

// comparison
let diffMinAvg = Math.abs(19 - average)
let diffMaxAvg = Math.abs(26 - average)
console.log(diffMinAvg)
console.log(diffMaxAvg)
console.log(diffMaxAvg === diffMinAvg)
diffMaxAvg === diffMinAvg ? console.log('yes') : console.log('no')

// 1
const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]

console.log(countries.slice(0, 10))

            // 2
console.log(countries.length)
console.log(countries[96] + ' and ' + countries[97])

            // 3
let firstHalfOfCountries = countries.splice(0, 97)
console.log(firstHalfOfCountries)
console.log(firstHalfOfCountries.length)

let secondHalfOfCountries = countries.splice(-97)
console.log(secondHalfOfCountries.length)



