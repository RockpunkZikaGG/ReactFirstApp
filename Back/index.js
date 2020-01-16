const express = require('express');
const mongoose = require('mongoose');

//Query Params: req.query (URL?id=1)
//Route Params: res.params (URL/:id)
//Body: res.body (Body)

//MongoDB(Não relacional)

const app = express();
mongoose.connect("mongodb+srv://GameTester:Teste@gameteste-dudoy.gcp.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true , useUnifiedTopology: true});
app.use(express.json());

app.get('/',(req, res) => {
    return res.json({message : "Hello World"});
});

app.listen(3333);