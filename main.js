const express = require('express')
const app = express()
app.get("/",(req,res)=>{
    const pass = req.query.pass;
    if (pass!="ninja") {
        res.status(400).json({msg :"ull akonjo madaki thattu"})
        return
    }
    res.send("succesfully logged in")
    
})
app.listen(3000)
