const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'prueba',
    'root',
    '1908casla',
    {
        host:'localhost',
        dialect:'mariadb'
    }
);

sequelize
    .authenticate()
    .then(() => {
        console.log("La base de datos se conecto correctamente");
    }).catch((err) => {
        console.log(err);
    });

class User extends Sequelize.Model {}

User.init({
    nombre: Sequelize.STRING,
    apellido: Sequelize.STRING
    },{ sequelize, modelName:'Usuario' });

User.sync()
    .then(() => User.create({
        nombre: 'Francisco',
        apellido: 'Vazquez'
    }))
    .then((usuario) => usuario.destroy())
    .then(() => console.log('Usuario eliminado'));
