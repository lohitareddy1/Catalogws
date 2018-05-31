var express = require ('express')
var app = express ()
var cors = require ('cors')
app.use(cors())
let data = [
    {
        name : "item1",
        description: "first catalog item",
        cost : '$25'
    },
    {
        name : "item2",
        description: "second catalog item",
        cost : '$35'
    },
    {
        name : "item3",
        description: "third catalog item",
        cost : '$45'
    },
    {
        name : "item4",
        description: "fourth catalog item",
        cost : '$45'
    },
    {
        name : "item5",
        description: "fifth catalog item",
        cost : '$45'
    },
    {
        name : "item6",
        description: "sixth catalog item",
        cost : '$45'
    }
]

app.listen(8000,()=>{ 
    console.log("Server started")}
    )
app.get('/getitems',(req,res)=>{
    res.send(data)
})
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})    
