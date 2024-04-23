const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');

const adminLayout = '../views/layouts/admin';

// GET/Admin - Login Page
router.get('/admin', async (req, res) => {
	try {
		const locals = {
			title: 'Admin',
			description: 'Simple Blog created with NodeJS, Express & MongoDB.',
		};

		res.render('admin/index', { locals, layout: adminLayout });
	} catch (error) {
		console.log(error);
	}
	res.render('index', locals);
});

// Post/Admin - Check Login
router.post('/admin', async (req, res) => {
	try {
		const { username, password } = req.body;

		res.render('admin/index', { locals, layout: adminLayout });
	} catch (error) {
		console.log(error);
	}
	res.render('index', locals);
});

// Post/Admin - Register
router.post('/admin', async (req, res) => {
	try {
		const { username, password } = req.body;

		res.render('admin/index', { locals, layout: adminLayout });
	} catch (error) {
		console.log(error);
	}
	res.render('index', locals);
});

module.exports = router;
