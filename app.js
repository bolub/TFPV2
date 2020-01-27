const express = require('express');
const app = express();

const fs = require('fs');
// const HTML = require('html-parse-stringify')

const PORT = process.env.PORT || 5000;

app.use(express.static('public'));
app.set("view engine", "ejs");

app.get('/', (req, res)=>{
	res.render('index');
});

app.get('/theFashionSchool', (req, res) => {
	res.render('FashionSchool');
});

app.get('/onlineCourses', (req, res)=>{
	fs.readFile('public/OnlineCourses.json', (err, data) => {
		if (err) throw err;

		let courses = JSON.parse(data);

		// let ast = HTML.parse(courses.ClassDetails[1]);

		// console.log(ast);

		res.render('onlineCourses', { Courses: courses });
	})
});

app.get('/onsiteCourses', (req, res) => {
	fs.readFile('public/Courses.json', (err, data) => {
		if (err) throw err;

		let courses = JSON.parse(data);

		// let ast = HTML.parse(courses.ClassDetails[1]);

		// console.log(ast);

		res.render('onsiteCourses', { Courses: courses });
	})
});

app.get('/coursePage/:courseId', (req, res) => {
	fs.readFile('public/Courses.json', (err, data)=>{
		if (err) throw err;

		let courses = JSON.parse(data);

		// let ast = HTML.parse(courses.ClassDetails[1]);

		// console.log(ast);
		
		res.render('CoursePage', { courseID: req.params.courseId, Courses:courses });
	})
});

app.get('/onlineCoursePage/:courseId', (req, res) => {
	fs.readFile('public/OnlineCourses.json', (err, data) => {
		if (err) throw err;

		let courses = JSON.parse(data);

		// let ast = HTML.parse(courses.ClassDetails[1]);

		// console.log(ast);

		res.render('OnlineCoursePage', { courseID: req.params.courseId, Courses: courses });
	})
});

app.listen(PORT, ()=>{
	console.log(`APP RUNNING ON ${PORT}`);
});