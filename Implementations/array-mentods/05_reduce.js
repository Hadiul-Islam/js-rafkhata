function customeReduce (arr, callback, initialValue){
    let accumulator = initialValue !== undefined ? initialValue : arr[0]

    for(let i = 0; i < arr.length; i++) {
        if(accumulator==undefined){
            accumulator = arr[i]
        } else {
            accumulator = callback(accumulator, arr[i], arr)
        }
    }

    return accumulator
}

const nums = [1,2,3,4,5]

const sumWithInitial = customeReduce(nums, (accumulator, currentValue) => {
    return accumulator + currentValue
}, 0)

console.log(sumWithInitial)