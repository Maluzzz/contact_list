var express=require('express')
var app=express()

const contacts = [
    {name: 'Mike', surname: 'Bolt', email: 'mike.bolt@gmail.com', phone: '+44788839923'},
    {name: 'John', surname: 'Runner', email: 'john@gmail.com', phone: '+44788839923'},
    {name: 'walt', surname: 'Disney', email: 'walt@gmail.com', phone: '+44788839923'},
]

app.get('/list',function(req,res) {
    res.send(
        [
            {name: 'Mike', surname: 'Bolt', email: 'mike.bolt@gmail.com', phone: '+44788839923'},
            {name: 'John', surname: 'Runner', email: 'john@gmail.com', phone: '+44788839923'},
            {name: 'walt', surname: 'Disney', email: 'walt@gmail.com', phone: '+44788839923'},
        ]
    )
})

app.post('/contact',function(req,res) {
    contacts.push({name: 'New', surname: 'Guy', email: 'new.guy@gmail.com', phone: '+44788839923'})
})

var server=app.listen(3000,function() {})