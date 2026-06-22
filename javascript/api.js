fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method:"PATCH",
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        title:"post Check",
        body:"this is body"
    })
})
.then(res=>res.json())
.then(data=>console.log(data));