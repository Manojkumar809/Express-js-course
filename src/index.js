const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const hbs = require('hbs')
// to set the view engine 
app.set("view engine", "hbs");
// template engine route
app.get("/", (req,res)=>{
    res.render('index', {
        name: 'Manoj'
    })
})
//to go to about page
app.get("/about", (req,res)=>{
    res.render('about')
})
app.get("/about/*", (req, res)=>{
    res.render('404', {
        errorcomment: 'oops this about page does not exist'
    })
})
// by default the tempalte engine is looks for the views directory 
// we can change the name of views directory 
//1)First change the name of the directory name
//2)then set the new name like below
const staticPath = path.join(__dirname, '../public')
const templatePath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
app.set("views", templatePath);// here the templatepath is a var which holds the new directory location
hbs.registerPartials(partialsPath)

//  built in middleware
app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res)=>{
    res.send('hello from express')
})
app.get('/about', (req, res)=>{
    res.send('hello from express about page')
})
// this part of must be written at bottom only
app.get("*", (req, res)=>{
    res.render('404', {
        errorcomment: 'oops page does not exist'
    })
})
// upto here
app.listen(port, ()=>{
    console.log(`example app is listening at http://localhost:${port}`)
})