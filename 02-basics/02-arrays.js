const marvel_heros = ["Thor", "Iron Man", "Captain America", "Groot"]
const dc_heros = ["superman", "Batman", "Flash", "Volvarine"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[4]);

// const mnerged_heros = marvel_heros.concat(dc_heros)
// console.log(mnerged_heros);

// spread operator

// const all_newheros = [...marvel_heros, ...dc_heros]
// console.log(all_newheros)


const anotherArr = [1,2,3, [4,5,6], 7, [6,7,[4,5]]]
const real_another_arr = anotherArr.flat(Infinity)

console.log(real_another_arr);


console.log(Array.isArray("Kunal"));
console.log(Array.from("Kunal"));
console.log(Array.from({name: "Kunal"}));

let n1 = 100
let n2 = 200
let n3 = 300

console.log(Array.of(n1,n2,n3));








