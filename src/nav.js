// this is a task 
const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res)=>{
    res.write("<h1>welcome to my page</h1>")
    res.write("<h1>welcome to my page again</h1>")
    res.send();
})
app.get('/about', (req, res)=>{
    res.send("welcome to my about page")
})
app.get('/contact', (req, res)=>{
    res.status(200).send("welcome to my contact page")
})
// app.get('/temp', (req, res)=>{
//     res.send([{
//         id:1,
//         name:'manoj'
//     },{
//         id:1,
//         name:'manoj'
//     },{
//         id:1,
//         name:'manoj'
//     },{
//         id:1,
//         name:'manoj'
//     }])
// })
app.get('/temp', (req, res)=>{
    res.json([{
        id:1,
        name:'manoj'
    },{
        id:1,
        name:'manoj'
    },{
        id:1,
        name:'manoj'
    },{
        id:1,
        name:'manoj'
    }])
})
// the difference between res.send() and res.json() is both the methods are identical when an obj or array is passed, but res.json() will also convert non-objs such as null and undefined, which are not valid  json
app.listen(port, ()=>{
    console.log(`your app is listening at http://localhost:${port}`)
})