function copyExample(n) {
    navigator.clipboard.writeText(getBodyToString(window[`example${n}`])).then(function () {
        console.log(`example${n} copied`);
    }, function () {
        alert("Error in copy to clipboard");
    });
}

function Execute(n){
    window[`example${n}`]();
}

///example 1
function example1() {
    function timeout(ms) {
        return new Promise(resolve => setTimeout(() => console.log(`Task Done After ${ms} ms!`), ms));
    }
    async function ResolveIn(ms) {
        timeout(ms);
        return "Async Function Complete";
    }
    ResolveIn(2000).then(console.log);
}
///

///example 2
function example2() {
    function timeout(ms){
        return new Promise( resolve => setTimeout(() => console.log(`Task Done After ${ms} ms!`), ms));
    }
    
    async function ResolveIn(ms) {
        timeout(ms);
        return "Async Function Complete";
    }
    
    console.log("Starting");
    ResolveIn(300).then(console.log);
    console.log("Ending");
}
///

///example 3
function example3() {
    function timeout(ms) {
        return new Promise(resolve => setTimeout(() => console.log(`Task Done After ${ms} ms!`), ms));
    }

    async function ResolveIn(ms) {
        console.log("Processing some op in the async function");
        timeout(ms);
        return "Async Function Complete";
    }

    console.log("Starting");
    ResolveIn(300).then(console.log);
    console.log("Ending");
}
///

///example 4
function example4() {
    function timeout(ms){
        return new Promise( resolve => setTimeout(() => resolve(ms), ms));
    }
    
    async function ResolveIn(ms) {
        console.log("Op before timeout");
        var number =  await timeout(ms);
        console.log("Op After timeout");
        return number;
    }
    
    console.log("Starting");
    ResolveIn(300).then(res => console.log(`Async Function complete After ${res} ms`));
    console.log("Ending");
}
///

///example 5
function example5() {
    function timeout(ms){
        return new Promise( resolve => setTimeout(() => resolve(ms), ms));
    }
    
    async function ResolveIn(ms, id) {
        console.log(`Some Op in ${id}`)
        var number =  await timeout(ms);
        return id + " has Finished";
    }
    
    console.log("Starting");
    ResolveIn(400, "First Call").then(console.log);
    ResolveIn(300, "Second Call").then(console.log);
    console.log("Ending");
}
///



///example 6
function example6() {
    async function HardtoCompute(n, msg){
        for(let i = 0; i < n; i++) {
            //console.log(msg)
        }
        return msg + " has finished";
    }
    
    console.log("Starting");
    HardtoCompute(10, msg="Long Time Function").then(console.log);
    console.log("Ending");
}
///

function getBodyToString(f) {
    var result = f.toString().split('\n');
    var stringResult = "";
    for (let i = 1; i < result.length - 1; i++) {
        stringResult += result[i] + "\n";
    }
    return stringResult;
}