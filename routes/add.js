const {Router} = require('express')
const  Course = require('../models/course')
const router = Router();

router.get('/', (req, res) => {
    res.render('add', {
        title: 'Add courses',
        isAdd: true
    })
})

router.post('/', async (req, res) => {
    const course = new Course(req.body.title, req.body.price, req.body.img, req.body.id)
    await course.save()
    res.redirect('/courses');
})

module.exports = router;