'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Teacher extends Model {

  }
  Teacher.init({
    firstName: {
      type: DataTypes.STRING,
      validate: {
        is: {
          args: ["^[a-z]+$", 'i'],
          msg: "First Name must be letters"
        },
        isAlphanumeric: {
          args: true,
          msg: "First Name must be letters"
        },
        len: {
          args: [2, 30],
          msg: "length of First Name must be 2 - 30 characters"
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        is: {
          args: ["^[a-z]+$", 'i'],
          msg: "Last Name must be letters"
        },
        isAlphanumeric: {
          args: true,
          msg: "Last Name must be letters"
        },
        len: {
          args: [2, 30],
          msg: "length of Last Name must be 2 - 30 characters"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Invalid email, Example valid email: edwin@gmail.com"
        },
        uniqueEmail: (value, next) => {
          Teacher.findOne({
              where: {
                email: value
              }
            })
            .then(finded => {
              if (finded) {
                next(new Error('Email already exists, try another email'))
              } else {
                next()
              }
            })
            .catch(err => {
              next(err);
            })
        }
      }
    }
  }, {
    sequelize
  })

  Teacher.associate = function (models) {

  };
  return Teacher;
};