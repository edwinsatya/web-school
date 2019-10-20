const router = require('express').Router();
const Student = require('../controllers/studentController');
const Subject = require('../controllers/subjectController');
const Teacher = require('../controllers/teacherController');

//home
router.get('/', (req, res) => {
    res.render('home')
})
//Teacher
router.get('/addTeacher', Teacher.formCreate);
router.post('/addTeacher', Teacher.create);
router.get('/updateTeacher/:id', Teacher.formUpdate);
router.post('/updateTeacher/:id', Teacher.update);
router.get('/deleteTeacher/:id', Teacher.delete);
//Student
router.get('/addStudent', Student.formCreate);
router.post('/addStudent', Student.create);
router.get('/updateStudent/:id', Student.formUpdate);
router.post('/updateStudent/:id', Student.update);
router.get('/deleteStudent/:id', Student.delete);
//Subject
router.get('/addSubject', Subject.formCreate);
router.post('/addSubject', Subject.create);
router.get('/updateSubject/:id', Subject.formUpdate);
router.post('/updateSubject/:id', Subject.update);
router.get('/deleteSubject/:id', Subject.delete);
//view all data hacktiv8
router.get('/viewlist', Teacher.showAll);


module.exports = router;