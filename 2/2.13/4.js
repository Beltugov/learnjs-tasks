let n = 12

for (let i =2 ; i< n ; i++ ) {
    if ((i % 2 !== 0 || i === 2) && (i % 3 !== 0 || i === 3)) {
      console.log(i)
    }
}