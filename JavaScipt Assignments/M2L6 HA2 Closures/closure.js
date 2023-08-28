function counter(){
    var count = 1;
    const add = (count) => ++count;
    return `original count: ${count}, new count:${add(count)}`;
}

console.log(counter());
