const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
function userModel(sequelize) {
  // defino el modelo
  sequelize.define('user', {
    nombre:{
      type: DataTypes.STRING,
    },
    apellido:{
      type: DataTypes.STRING,
    },
    edad:{
      type: DataTypes.INTEGER,
    },
    pais:{
      type: DataTypes.STRING,
    }
  },
  {
    timestamps:false
  });
};

module.exports={
  userModel
}
