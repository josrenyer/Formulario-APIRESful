require('dotenv').config();// lo requerimos para poder traer los archivos .env ya que son datos sensibles
const Sequelize=require("sequelize");
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;   //datos sensibles para realizar las conexiones a a la base de datos

const {userModel}=require("./modules/User.js");//modelo de tabla users


const sequelize=new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/demo`, { //demo es el nombre de la base de datos
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});


userModel(sequelize);

const user=sequelize.models

module.exports={
	...sequelize.models,
	conn:sequelize,
}