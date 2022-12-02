function caSum(targetSum,numbers){
    if(targetSum===0)return true
    if(targetSum <0)return false

    for(let num of numbers){
        const remainder = targetSum -num
        if(caSum(remainder, numbers) ===true){
            return true
        }
    }
    return false
}


// caSum(7,[2,3]) --> true
console.log(caSum(7,[2,3]))

// caSum(7,[5,3,4,7]) -->true
console.log(caSum(7,[5,3,4,7]))

// caSum(7,[2,4]) -->false
console.log(caSum(7,[2,4]))

// caSum(300,[7,14]) -->false
console.log(caSum(300,[7,14]))


