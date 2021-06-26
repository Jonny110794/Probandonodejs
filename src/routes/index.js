const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home.html', { title: 'Probando Nodejs' });
});

router.get('/about', (req, res) => {
    res.render('about.html', { title: 'Webside'});
});

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Webside'});
});


module.exports = router;