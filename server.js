const express = require('express')
const path = require('path')
const app = express();

app.get('/s', (req,res) => {
	res.sendFile(path.join(__dirname + "/index.html"));
});

console.log("https://seacrozer.dev")

app.use('/' , express.Router)
app.listen('3000')
