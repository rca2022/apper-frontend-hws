function transform () {
    const squarearray = nums.map(num => num*num)
    const sorted = squarearray.sort((a,b)=>a-b)
    console.log(sorted)
}

const nums = [4,2,8,6,10,3]

transform.apply(nums)