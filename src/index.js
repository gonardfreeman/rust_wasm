const wasm = require("./main.rs");

function fibJSrec(n){
    if (n <= 1) return 1;
    return fibJSrec(n-1) + fibJSrec(n-2);
}

wasm.initialize().then(module => {
    const add = module.cwrap("fibonacci_rec", "number", ["number"]);

    console.log("Calling rust functions from JS");
    console.time("test fibonacci rust");
    console.log(add(20));
    console.timeEnd("test fibonacci rust");
    console.time("test fibonacci JS");
    console.log(fibJSrec(20));
    console.timeEnd("test fibonacci JS");
    var div = document.querySelector(".test");
    div.innerHTML = add(20);
    // div.innerHTML = "test";
});