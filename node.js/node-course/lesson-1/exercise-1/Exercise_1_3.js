let arr = [1,2,3,4,5,6] ;

function getAverageLater(arr) {
    let sum = arr.reduce((x,y) => x+y);
    let avg = sum/arr.length;

    return new Promise(resolve => {
        setTimeout(() => resolve( avg ), 1000);
      });
}

let average = getAverageLater(arr);

average.then(a => console.log(a));
