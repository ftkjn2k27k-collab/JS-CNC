const marvel_heroes = ["thor","spiderman","ironman"]
const dc = ["flash","superman","batman"]
// marvel_heroes.push(dc)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);
//  const allHeroes = marvel_heroes.concat(dc)
// console.log(allHeroes);

const all_new_Heroes = [...marvel_heroes,... dc]
console.log(all_new_Heroes);
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const usable_aray = another_array.flat(Infinity)
console.log(usable_aray);

console.log(Array.isArray("Sarthak"));
console.log(Array.from("Sarthak"));
console.log(Array.from({name: "Sarthak"}));    // have to specify key or value 



let score1 = 100 
let score2 = 200 
let score3 = 300 
console.log(Array.of(score1,score2,score3));









