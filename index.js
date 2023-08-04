// code your solution here
function saturdayFun(activity = "roller-skate"){
    return (`This Saturday, I want to ${activity}!`)
}
console.log(saturdayFun());
console.log(saturdayFun("bathe my dog"));

function mondayWork(work = "go to the office"){
    return (`This Monday, I will ${work}.`)
}
console.log(mondayWork());
console.log(mondayWork("work from home"))

function wrapAdjective(wrap="*"){
    return function (adjective = "highlight"){
            return `You are ${wrap}${adjective}${wrap}!`
    }
}
wrapAdjective("!!!");
