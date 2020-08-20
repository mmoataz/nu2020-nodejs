function area(l){
    return l*l;
}

function testcallback(callbackfunction){
    return callbackfunction(20);
}

let x = testcallback(area);
console.log(x);