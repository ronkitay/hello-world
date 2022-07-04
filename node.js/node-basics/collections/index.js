module.exports.run = () => {
    const mySet = new Set(['Hello', 'World']);
    console.log(`Values in mySet are: [${Array.from(mySet).join(',')}]`);
    for (const value of mySet) {
        console.log(`Value: ${value}`);
    }
}