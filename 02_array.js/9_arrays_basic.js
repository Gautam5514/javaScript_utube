const war = ["Tiger", "Hritik", "Vani"]
const  tiger = ["Shahrukh", "Salman", "katrina"]

//war.push(tiger)
//it is bacame a array to sub array
// console.log(war);
// console.log(war[3][1]);

//Basically The concate used to combine of two array
// const allHeros = war.concat(tiger)
// console.log(allHeros);

//Spred = It is to broke the all part in js this is operator and concate is  also a operator
const all_new_heros = [...war, ...tiger]
// console.log(all_new_heros);



const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
//Infinity is used to basically the array to sub array to sub array to sub array than this is complex to find
//redundant than we use Infinity
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

//This is convert to string to array
console.log(Array.isArray("Gautam"))
console.log(Array.from("Gautam"))
//this  show the empty bcoz of there is no any informtaion to which to which change
console.log(Array.from({name: "Gautam"})) // Interesting

//this is combine to all elemen in the single array used to only Array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
