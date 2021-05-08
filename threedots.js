const ages = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
const ages2 = [63, 42, 12, 86, 94, 21, 32, 53, 75];

const allAges = ages.concat(ages2);
// console.log(allAges);

const allAges2 = [...ages, ...ages2];
console.log(allAges2);


const taka = [532, 425, 245];
const maximum = Math.max(...taka);
console.log(maximum);