'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Subject extends Model {

  };
  Subject.init({
    subjectName: {
      type: DataTypes.STRING,
      validate: {
        is: {
          args: ["^[a-z]+$", 'i'],
          msg: "Subject Name must be letters"
        },
        isAlphanumeric: {
          args: true,
          msg: "Subject Name must be letters"
        },
        len: {
          args: [2, 10],
          msg: "length of First Name must be 2 - 30 characters"
        },
        isUnique: (value, next) => {
          Subject.findOne({
              where: {
                subjectName: value
              }
            })
            .then(finded => {
              if (finded) {
                next(new Error(`Subject Name already exists, try another Subject`));
              } else {
                next();
              }
            })
        }
      }
    }
  }, {
    sequelize
  })

  Subject.associate = function (models) {
    // associations can be defined here
  };
  return Subject;
};