console.log("hii")
const first = document.getElementById("p1")
first.innerHTML = "sample Testing......"
function onChangeHandler(){
    console.log("hello")
}
const input = document.getElementById("name")
const output = document.getElementById("inputField")

input.addEventListener("input",()=>{
    output.innerHTML = input.value
})

const p = document.createElement("p")
p.innerHTML = "New P TAG"
document.body.appendChild(p)

//p.remove()

console.log("A");//first 
setTimeout(()=>{//queue:B |last
    console.log("B")
},2000);
setTimeout(()=>{//queue:B,0 sec delay| here 0 less time so execute before B but queue not execute before C
    console.log("0 sec delay")
},0)
console.log("C")

const promise = new Promise((resolve,reject)=>{
    const success = true;
    setTimeout(()=>{//queue:B,0 sec delay| here 0 less time so execute before B but queue not execute before C
    console.log("testing")
},3000)
    if(success)
        resolve("Done")
    else
        reject("Fail")
})

promise.then(res=>console.log(res)).catch(e=>console.log(e));