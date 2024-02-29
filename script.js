
// ? ================================= Massivlar =====================================

let mass = [1, 2, 3]
console.log(mass);

let arr = new Array('a', 'b', 'c')
// console.log(arr);

// ? ===================== Method =========================

// Push, pop, shift, unshift, concat, splice, slice
mass.push(4) // oxiridan qo'shadi
mass.pop() // oxiridan o'chiradi
mass.unshift(4) // oldidan o'chiradi
mass.shift() // oldidan o'chiradi

let g = mass.concat(arr)
// let h = g.slice(2, 5)

// let f = g.splice(2, 3)

console.log(g);
// console.log(h);
// console.log(f);

// ? ======================== Iteratorlar ===========================

let pays = [20, 1500000, 2600000, 45, 1800000, 1565000, 3500000, 1890000, 3890000]

g.forEach((item, index, array) =>{
    console.log(item, index, array);
})

let k = pays.map((item, index, array) =>{
    return item / 3600 / 24 / 30
})
console.log(k);

let l = pays.find(item => (item > 1000000) && (item < 3000000))
l = pays.filter(item => (item > 1000000) && (item < 3000000))
// pays.sort((a, b)=> a- b)
pays.sort((a, b) => {
    if(a > b) return 1
    if(a < b) return -1
    if(a == b) return 0
})
console.log(pays);

let summ = pays.reduce((a, b) => a + b, 0)
console.log(summ);
console.log(g);
g.reverse()
console.log(g);
let z = "Salom dunyo".split('')
console.log(z);
z.reverse()
let n = z.join('|')
console.log(n);