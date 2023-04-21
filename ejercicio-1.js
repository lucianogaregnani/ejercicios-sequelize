const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    'prueba',
    'root',
    '1908casla',
    {
        host: 'localhost',
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
    }
)

sequelize.sync()
    .then(() => User.create({
        nombre:'Luciano',
        apellido:'Garegnani'
    }))
    .then(usuario => usuario.update(
        { nombre:'Juan' }
    ))
    .then(usuario => console.log(usuario.toJSON()))
