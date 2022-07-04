
console.log("Using 'console.log' to print stuff");


const mySet = new Set(['Hello', 'World']);
console.log(`Values in mySet are: [${Array.from(mySet).join(',')}]`);
for (const value of mySet) {
	console.log(`Value: ${value}`);
}

