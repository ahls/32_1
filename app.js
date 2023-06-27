const express = require('express');
const helper = require('./helper')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/mean',(req,res,next)=>
{
    const nums = req.query.nums
    if(!nums)
    {
        return res.status(400).send("nums are required")
    }
    let numArray = nums.split(',');
    numArray.forEach(element => {
        if(!Number(element))
        {
            return res.status(400).send(`${element} is not a number`);
        }
    });

    return res.send(`mean value is ${helper.Mean(numArray)}`)
})
app.get('/median',(req,res,next)=>
{
    const nums = req.query.nums
    if(!nums)
    {
        return res.status(400).send("nums are required")
    }
    let numArray = nums.split(',');
    numArray.forEach(element => {
        if(!Number(element))
        {
            return res.status(400).send(`${element} is not a number`);
        }
    });

    return res.send(`Median value is ${helper.Median(numArray)}`)
})
app.get('/mode',(req,res,next)=>
{
    const nums = req.query.nums
    if(!nums)
    {
        return res.status(400).send("nums are required")
    }
    let numArray = nums.split(',');
    numArray.forEach(element => {
        if(!Number(element))
        {
            return res.status(400).send(`${element} is not a number`);
        }
    });
    return res.send(`Mode value is ${helper.Mode(numArray)}`)

})
app.listen(3000, function () {
    console.log('App on port 3000');
  })