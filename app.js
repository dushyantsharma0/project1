const express =require('express')
const app=express()
const core =require('cors')
const coreConfig={
    origin:"*",
    credential:true,
    methods:["GET", "POST", "PUT","DELETE"]
}
app.options("",core(coreConfig))
app.use(core(coreConfig))
app.set('view engine', 'ejs')
app.get('/',(req,resp)=>{
    resp.render("index")
})
app.listen(4500)