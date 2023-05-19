const express = require("express");
const bodyParser= require("body-parser");
const https=require("https");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    console.log("ma chuda ma chuda");
})


app.post("/",function(req,res){

    //todaywe gonnna use a api where the user will gonna give us the number of symptons and we have to guess the disease the person is suffering and give them proper advice and some of the medicines 
    const url="";

    https.get(url,function(response){


        response.on("data",function(data){
            const diseasedata = JSON.parse(data);
        })
    })


});
mobiscroll.select('#multiple-select', {
    inputElement: document.getElementById('my-input'),
    touchUi: false
});


app.listen(3000,function(){
    console.log("serrver is running at 3000");
});