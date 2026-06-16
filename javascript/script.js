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