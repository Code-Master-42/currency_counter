#!/usr/bin/env node
import {log} from "console"

import inquirer from "inquirer"
let currencycounter={
    USD:{
        USD:1,
        ERU:0.02,
        PKR:278
    },
    ERU:{
        USD:1.88,
        ERU:1,
        PKR:300
    },
    PKR:{
        USD:0.0036,
        ERU:0.0033,
        PKR:1
    }
};
const answer: {
    from:"USD"|"ERU"|"PKR";
    to:"USD"|"ERU"|"PKR";
    amount:number;
}=await inquirer.prompt([{
    name:"from",
    message:"Enter your currency which you want to convert",
    type:"list",
    choices:["USD","ERU","PKR"],
},{
name:"to",
message:"selet your currency which you want to convert",
type:"list",
choices:["USD","ERU","PKR"]
},{
    name:"amount",
    message:"Enter your amount in number",
    type:"number",
    choices:["USD","ERU","PKR"]
}
])
const {from,to,amount}=answer;
if(from&&to&&amount){
    let result=currencycounter[from][to] * amount;
    console.log(`you conversation from${from}to${to} is ${result}`)
}else{
    console.log("invalid operation")
}
