const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static('public'))

app.get('/', (req, res)=>{
	res.render('index.ejs');
});

app.get('/onlineCourses', (req, res)=>{
	res.render('onlineCourses.ejs');
});

app.get('/onsiteCourses', (req, res) => {
	res.render('onsiteCourses.ejs');
});

app.listen(PORT, ()=>{
	console.log(`APP RUNNING ON ${PORT}`);
});