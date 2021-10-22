const a = [1, 2, 3];
const b = [2, 3, 4];

const c = a.filter(item => item != b.map());

console.log(c);
