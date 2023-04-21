const {Sequelize, Op} = require('sequelize');

const sequelize = new Sequelize(
    'prueba',
    'root',
    '1908casla',
    {
        host:'localhost',
        dialect: 'mariadb'
    }
);

sequelize
    .authenticate()
    .then(() => console.log("La base de datos se conecto correctamente"))
    .catch((err) => console.log(err))

const User = sequelize.define(
    "Usuario", {
    nombre: Sequelize.STRING,
    apellido: Sequelize.STRING
})

const criterioDeEliminacion = {
    [Op.or]: [
        { apellido: 'Garegnani' },
        { apellido: 'Castillo' }
    ]
}

sequelize.sync({force:true})
    .then(() => User.create({
        nombre: 'Alberto',
        apellido: 'Garegnani'
    }))
    .then(() => User.create({
        nombre: 'Luciano',
        apellido: 'Garegnani'
    }))
    .then(() => User.create({
        nombre: 'Yesica',
        apellido: 'Castillo'
    }))
    .then(() => User.create({
        nombre: 'Karen',
        apellido: 'Castillo'
    }))
    .then(() => User.update(
        { apellido: 'Peréz' }, 
        { where: criterioDeEliminacion }
    ));

