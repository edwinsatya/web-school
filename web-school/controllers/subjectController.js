const Model = require('../models');
const ModelSubject = Model.Subject;

class Subject {
    static formCreate(req, res) {
        res.render('formAddSubject', {
            err: req.query.err
        });
    }

    static create(req, res) {
        ModelSubject.create({
                subjectName: req.body.subjectName
            })
            .then(() => {
                res.redirect('/');
            })
            .catch(err => {
                res.redirect(`/addSubject?err=${err.message}`)
            })
    }

    static formUpdate(req, res) {
        ModelSubject.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(subject => {
                res.render('formUpdateSubject', {
                    subject,
                    err: req.query.err
                })
            })
            .catch(err => {
                res.send(err);
            })
    }

    static update(req, res) {
        ModelSubject.update({
                subjectName: req.body.subjectName
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then(() => {
                res.redirect('/');
            })
            .catch(err => {
                res.redirect(`/updateSubject/${req.params.id}?err=${err.message}`);
            })
    }

    static delete(req, res) {
        ModelSubject.destroy({
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

module.exports = Subject;