const express = require('express')
const path = require('path')
const app = express();

app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname + "/index.html"));
});
app.get('/about' , (req ,res ) => {
	res.sendFile(path.join(__dirname + "/about.html"));
})

app.use('/' , express.Router)
app.listen('3000')
