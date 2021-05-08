const numbers = [3, 4, 5, 6, 7, 8, 9];

const output = [];
numbers.map((num, index, array) => {
    const result = num * num;
    output.push(result);
    // console.log(num)
})
console.log(output);


const bigger = numbers.filter(x => x < 5);
console.log(bigger);