// Demonstrate how to inspect how much memory is used within a nodejs process
// https://www.valentinog.com/blog/node-usage/
const arr = Array(1e7).fill('some string') 
arr.reverse()

const used = process.memoryUsage().heapUsed / 1024 / 1024

console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`)
