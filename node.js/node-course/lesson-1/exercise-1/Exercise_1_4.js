let matrix = [ [1,6,3,9],[6,12,5,21],[4,11,23,1] ]


function funcA(matrix) {
    let sum = matrix.map(arr => arr.reduce((x,y) => x +y)).reduce((x,y) => x +y);

    return new Promise(resolve => {
        setTimeout(() => resolve(sum),2000);
    });
}

async function funcB() {
    let total = await funcA(matrix);
    return total * 2;
}

funcB().then(x => console.log(x));
