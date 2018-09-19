#!/usr/bin/env node
async function long_tine_value(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve('long_tine_value'),1000)
    })
}
async function test(){
    const a= await long_tine_value()
    console.log(a)
}
test()