function saturdayFun(act = 'roller-skate'){
    return `This Saturday, I want to ${act}!`;
}

const mondayWork = function (act = 'go to the office'){
    return `This Monday, I will ${act}.`;
}

function wrapAdjective(wow = '*'){
    const innerFunction = function (){
        return function (msg = 'special'){
            return `You are ${wow}${msg}${wow}!`;
        }
    }
    return innerFunction();
}






