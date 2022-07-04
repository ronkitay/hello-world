
function demoArray() {
    const myArr = ['An', 'Array'];
    console.log(`There are [${myArr.length}] values in myArr: [${myArr.join(',')}]`);

    for (const value of myArr) {
        console.log(`Value: ${value}`);
    }
}

function demoSet() {
    const mySet = new Set(['Hello', 'World']);
    console.log(`There are [${mySet.size}] values in mySet: [${Array.from(mySet).join(',')}]`);

    for (const value of mySet) {
        console.log(`Value: ${value}`);
    }
}


module.exports.run = () => {
    console.log(`\n=======================================`);
    console.log(`======== Module: Collections ==========`);
    console.log(`=======================================\n`);
    demoArray();
    demoSet();
}
