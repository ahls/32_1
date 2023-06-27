function Mean(nums)
{
    let sum = 0;
    nums.forEach(element => {
        sum+=Number(element);
    });
    return sum/nums.length;
}

function Median(nums)
{
    let midIndex = Math.floor(nums.length/2);
    return nums[midIndex];
}

function mode(nums)
{
    const freq = new Map();
    let highestNumber= 0;
    let highestNumFreq=0;
    nums.forEach(element => {
        if(freq.has(element))
        {
            freq.set(element, freq.get(element) + 1);
        }
        else
        {
            freq.set(element, 1);
        }
        if(freq.get(element) > highestNumFreq)
        {
            highestNumber = element;
            highestNumFreq = freq.get(element);
        }
    });
    return highestNumber;
}

module.exports=
{
    Median:Median,
    Mode:mode,
    Mean:Mean
}