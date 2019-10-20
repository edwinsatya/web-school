const Model = require('../models');
const ModelTeacher = Model.Teacher;
const ModelStudent = Model.Student;
const ModelSubject = Model.Subject;

class Teacher {
    static showAll(req, res) {
        ModelTeacher.findAll()
            .then(teachers => {
                ModelStudent.findAll()
                    .then(students => {
                        ModelSubject.findAll()
                            .then(subjects => {
                                res.render('viewlist', {
                                    teachers,
                                    students,
                                    subjects
                                })
                            })
                    })
            })
            .catch(err => {
                res.send(err);
            })
    }

    static formCreate(req, res) {
        res.render('formAddTeacher', {
            err: req.query.err
        })
        // console.log(req.query.err)
    }

    static create(req, res) {
        ModelTeacher.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email
            })
            .then(() => {
                res.redirect('/');
            })
            .catch(err => {
                res.redirect(`/addTeacher?err=${err.message}`);
            })
    }

    static formUpdate(req, res) {
        // let id = Number(req.params.id)
        console.log(req.params)
        ModelTeacher.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(teacher => {
                res.render('formUpdateTeacher', {
                    teacher,
                    err: req.query.err
                })
                // console.log(teacher.dataValues)
            })
            .catch(err => {
                res.send(err);
            })
    }

    static update(req, res) {
        ModelTeacher.update({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then(() => {
                res.redirect('/');
            })
            .catch(err => {
                res.redirect(`/updateTeacher/${req.params.id}?err=${err.message}`);
            })
        // console.log('ini body woi', req.body)
    }

    static delete(req, res) {
        ModelTeacher.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(() => {
                res.redirect('/');
            })
            .catch(err => {
                res.send(err);
            })
    }
};

module.exports = Teacher;