inp=process.argv.slice(2)
const rounddig = (n, decimals = 0) => 
Number(`${Math.round(`${n}e${decimals}`)}e${-decimals}`);
console.log(rounddig(inp[0],inp[1]))

