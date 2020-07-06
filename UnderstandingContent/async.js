function timeout(ms){
    return new Promise( resolve => setTimeout(() => resolve(ms), ms));
}

async function ResolveIn(ms) {
    // console.log("Some Op before the async call");// Before ending
    var number =  await timeout(ms);
    // console.log("Some Op after the async call");// After ending
    return number;
}

async function HardtoCompute(n, msg){
    return LongFor(n, msg);
}

function LongFor(n, msg){
    for(let i = 0; i < n; i++) {
        // console.log(msg)
    }
    return msg + " has finished";
}


function PromiseHardtoCompute(n, msg){
    return new Promise(resolve => {
        console.log("On Promise");
        resolve(LongFor(n, msg));
    });
}


// console.log("Staring");
// ResolveIn(1000).then(console.log);
// ResolveIn(300).then(console.log);
// HardtoCompute(100, msg="First").then(console.log);
// HardtoCompute(1, msg="First").then(console.log);
// PromiseHardtoCompute(100, msg="Second").then(console.log);
// console.log("Ending");
