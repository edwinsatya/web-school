const Model = require('../models');
const ModelStudent = Model.Student;

class Student {
    static formCreate(req, res) {
        res.render('formAddStudent', {
            err: req.query.err
        })
    }

    static create(req, res) {
        ModelStudent.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email
            })
            .then(() => {
                res.redirect('/');
            })
            .catch(err => {
                res.redirect(`/addStudent?err=${err.message}`)
            })
    }

    static formUpdate(req, res) {
        ModelStudent.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(student => {
                res.render('formUpdateStudent', {
                    student,
                    err: req.query.err
                })
            })
            .catch(err => {
                res.send(err);
            })
    }

    static update(req, res) {
        ModelStudent.update({
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
                res.redirect(`/updateStudent/${req.params.id}?err=${err.message}`)
            })
    }

    static delete(req, res) {
        ModelStudent.destroy({
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

module.exports = Student;